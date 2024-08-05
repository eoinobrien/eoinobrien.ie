import { Category } from "@/interfaces/category";
import { Post, PostType } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import slugify from "slugify";
import generateFeeds from "./feed";
import { Project, ProjectStatus } from "@/interfaces/project";

const postsDirectory = join(process.cwd(), "_posts");
let cachedPosts: Post[] | null = null;

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
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

  let result = { ...data, types, categories, slug: realSlug, content };

  console.log("HERE " + (types.indexOf(PostType.PROJECT) > -1));

  if (types.indexOf(PostType.PROJECT) > -1) {
    const status =
      data.status &&
      ProjectStatus[data.status.toUpperCase() as keyof typeof ProjectStatus];
    return { ...result, status } as Project;
  }

  return result as Post;
}

function getAllPostsFromDisk() {
  const isProduction = process.env.NODE_ENV == "production";

  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // In production, filter out posts whose publication date is after now
    // This only happens at build time, so future posts are not published automatically without a build
    .filter((post) =>
      isProduction ? post.date <= new Date().toISOString() : true
    )
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  generateFeeds(posts);

  cachedPosts = posts;
}

export function getAllPosts(type?: PostType): Post[] {
  if (!cachedPosts) {
    getAllPostsFromDisk();
  }

  if (cachedPosts) {
    const posts = cachedPosts
      // Filter based on the post type
      .filter((post) =>
        type != undefined ? post.types.indexOf(type) > -1 : true
      );

    return posts;
  }

  throw "Posts not cached correctly";
}

export function getAllPostCategories(): Category[] {
  const posts = getAllPosts();

  var flattenedCategories = new Map();

  posts
    .flatMap((post) => post.categories ?? [])
    .forEach((category) => {
      flattenedCategories.set(category.slug, category);
    });

  return Array.from(flattenedCategories.values());
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();

  return posts.filter(
    (post) =>
      post.categories && post.categories.some((c) => c.slug === category)
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
