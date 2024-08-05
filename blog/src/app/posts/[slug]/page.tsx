import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Post } from "@/interfaces/post";
import { getAllPosts, getPostBySlug } from "@/lib/post-api";
import { FullPostCard } from "@/app/components/full-post-card";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  };

  return <FullPostCard {...post} />;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

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
  const posts = await getAllPosts();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}
