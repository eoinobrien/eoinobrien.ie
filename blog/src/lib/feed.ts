import { Post } from "@/interfaces/post";
import { parseISO } from "date-fns";
import { Feed } from "feed";
import fs from "fs";

export default async function generateFeeds(posts: Post[]) {
  const siteUrl = new URL(process.env["HOST"] ?? "https://eoinobrien.ie");

  const name = "Eoin O'Brien";

  const feed = new Feed({
    title: "Eoin O'Brien",
    description: "This is my personal feed!",
    id: siteUrl.href,
    link: siteUrl.href,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
//    image: new URL('image.png', siteUrl).href,
//    favicon: new URL('favicon.ico', siteUrl).href,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${name}`,
    updated: parseISO(posts[0].date ?? new Date()),
    generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: new URL('json', siteUrl).href,
      atom: new URL('atom', siteUrl).href,
    },
    author: {
      name: "Eoin O'Brien",
      link: siteUrl.href,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: new URL(`/posts/${post.slug}`, siteUrl).href,
      content: post.content,
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
