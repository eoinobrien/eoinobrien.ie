import { Post } from "@/interfaces/post";
import { parseISO } from "date-fns";
import { Feed } from "feed";
import fs from "fs";

export default async function generateFeeds(posts: Post[]) {
  const siteUrl = new URL(process.env["HOST"] ?? "https://eoinobrien.ie");

  const name = "Eoin O'Brien";

  const feed = new Feed({
    title: "Eoin O'Brien",
    description: "Posts and projects that I've been working on.",
    id: siteUrl.href,
    link: siteUrl.href,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    favicon: new URL('favicon.ico', siteUrl).href,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${name}`,
    updated: parseISO(posts[0]?.date ?? new Date().toISOString()),
    generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      rss: new URL('rss.xml', siteUrl).href,
      json: new URL('feed.json', siteUrl).href,
      atom: new URL('atom.xml', siteUrl).href,
    },
    author: {
      name: "Eoin O'Brien",
      link: siteUrl.href,
      email: "mail@eoinobrien.ie"
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: new URL(`/posts/${post.slug}`, siteUrl).href,
      link: new URL(`/posts/${post.slug}`, siteUrl).href,
      content: post.simplifiedContent ? post.simplifiedContent : post.subtitle,
      author: post.authors.map((author) => ({
        name: author.name,
      })),
      date: parseISO(post.date),
      image:
        post.image && post.image.path && new URL(post.image.path, siteUrl).href,
      category:
        post.categories &&
        post.categories.map((category) => ({
          name: category.title,
        })),
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
  fs.writeFileSync("./public/feed.json", feed.json1());
}
