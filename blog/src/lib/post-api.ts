import { Category } from "@/interfaces/category";
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import slugify from "slugify";
import generateFeeds from "./feed";

const postsDirectory = join(process.cwd(), "_posts");

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

  return { ...data, categories, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // filter out posts whose publication date is after now,
    // This only happens at build time.
    .filter(post => post.date <= new Date().toISOString())
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  generateFeeds(posts);

  return posts;
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
