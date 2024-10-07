import { Category } from "@/interfaces/category";
import { Post, PostType } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import slugify from "slugify";
import generateFeeds from "./feed";
import { Project, ProjectStatus } from "@/interfaces/project";
import { markdownToHtml, getMarkdownProcessor } from "./markdownToHtml";
import { Processor } from "unified";

const postsDirectory = join(process.cwd(), "_posts");
let cachedPosts: Post[] | null = null;

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlugFromDisk(slug: string, processor: Processor<any, any, any, any, string>, simplifiedProcessor: Processor<any, any, any, any, string>): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const categories =
    data.categories &&
    data.categories.map((category: string) => createCategory(category));

  delete data.categories;

  const types: PostType[] = Object.values(data.types).map((type: unknown) => {
    return PostType[(type as string).toUpperCase() as keyof typeof PostType];
  });

  const contentHtml = await markdownToHtml(processor, content || "");
  const simplifiedContentHtml = await markdownToHtml(simplifiedProcessor, content || "");

  let result = {
    ...data,
    types,
    categories,
    slug: realSlug,
    content: contentHtml,
    simplifiedContent: simplifiedContentHtml,
  };

  if (types.indexOf(PostType.PROJECT) > -1) {
    const status =
      data.status &&
      ProjectStatus[data.status.toUpperCase() as keyof typeof ProjectStatus];
    return { ...result, status } as Project;
  }

  return result as Post;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  if (!cachedPosts) {
    const posts = await getAllPostsFromDisk();
    return filterPostsBySlug(posts, slug);
  }

  if (cachedPosts) {
    return filterPostsBySlug(cachedPosts, slug);
  }

  throw new Error("Posts not cached correctly");
}

async function getAllPostsFromDisk(): Promise<Post[]> {
  const isProduction = process.env.NODE_ENV == "production";

  const processor = await getMarkdownProcessor();
  const simplifiedProcessor = await getMarkdownProcessor(false);

  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlugFromDisk(slug, processor, simplifiedProcessor)))
    // In production, filter out posts whose publication date is after now
    // This only happens at build time, so future posts are not published automatically without a build
    .then((posts) =>
      (isProduction
        ? posts.filter((post) => post.date <= new Date().toISOString())
        : posts
      ).sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    );

  generateFeeds(posts);

  cachedPosts = posts;

  return posts;
}

export async function getAllPosts(type?: PostType): Promise<Post[]> {
  if (!cachedPosts) {
    const posts = await getAllPostsFromDisk();
    return filterPostsByType(posts, type);
  }

  if (cachedPosts) {
    return filterPostsByType(cachedPosts, type);
  }

  throw new Error("Posts not cached correctly");
}

export async function getAllPostCategories(): Promise<Category[]> {
  const posts = await getAllPosts();

  var flattenedCategories = new Map();

  posts
    .flatMap((post) => post.categories ?? [])
    .forEach((category) => {
      flattenedCategories.set(category.slug, category);
    });

  return Array.from(flattenedCategories.values());
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts();

  return posts.filter(
    (post) =>
      post.categories && post.categories.some((c) => c.slug === category)
  );
}

function filterPostsByType(posts: Post[], type?: PostType) {
  return (
    posts
      // Filter based on the post type
      .filter((post) =>
        type != undefined ? post.types.indexOf(type) > -1 : true
      )
  );
}

function filterPostsBySlug(posts: Post[], slug: string) {
  return (
    posts
      // Filter based on the post type
      .find((post) => post.slug === slug)
  );
}

function createCategory(category: string): Category {
  return {
    title: category,
    slug: makeSlugifyString(category),
  };
}

function makeSlugifyString(string: string): string {
  return slugify(string, {
    lower: true,
    locale: "en",
  });
}
