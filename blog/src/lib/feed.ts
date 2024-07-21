import { Post } from "@/interfaces/post";
import { parseISO } from "date-fns";
import { Feed } from "feed";
import fs from "fs";

export default async function generateFeeds(posts: Post[]) {
  const siteUrl =
    new URL(process.env.NODE_ENV === "production"
      ? "https://eoinobrien.ie"
      : "http://localhost:3000");
 
  
  const name = "Eoin O'Brien";

  const feed = new Feed({
    title: "Eoin O'Brien",
    description: "This is my personal feed!",
    id: siteUrl.href,
    link: siteUrl.href,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `${siteUrl}/image.png`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${name}`,
    updated: new Date(2013, 6, 14), // optional, default = today
    generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `${siteUrl}/json`,
      atom: `${siteUrl}/atom`,
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
      image: post.image && post.image.path && new URL(post.image.path, siteUrl).href,
      category: post.categories && post.categories.map((category) => ({
        name: category.title,
      })),
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
  fs.writeFileSync("./public/feed.json", feed.json1());
}
