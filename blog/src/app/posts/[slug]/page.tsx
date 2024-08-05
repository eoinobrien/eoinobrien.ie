import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Post } from "@/interfaces/post";
import { getAllPosts, getPostBySlug } from "@/lib/post-api";
import markdownToHtml from "@/lib/markdownToHtml";
import { FullPostCard } from "@/app/components/full-post-card";

type Params = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  };

  return <FullPostCard {...post} />;
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} by ${post.authors
    .map((author) => author.name)
    .join(", ")}`;

  return {
    title,
    openGraph: {
      title,
      images: post.image && [
        {
          url: new URL(post.image.path, process.env["HOST"]),
          secureUrl: new URL(post.image.path, process.env["HOST"]),
          alt: post.image.alt,
        },
      ],
      publishedTime: post.date,
      authors: post.authors && post.authors.map((author) => author.name),
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}
