import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Post } from "@/interfaces/post";
import { getAllPosts, getPostBySlug } from "@/lib/post-api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/components/post-body";
import { PostHeader } from "@/app/components/post-header";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="rounded-md bg-zinc-100 dark:bg-zinc-900 p-4">
      <PostHeader
        title={post.title}
        date={post.date}
        authors={post.authors}
        coverImage={post.image}
        categories={post.categories}
      />
      <PostBody content={content} />
    </main>
  );
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
          url: new URL(post.image.path, "https://eoinobrien.ie"),
          secureUrl: new URL(post.image.path, "https://eoinobrien.ie"),
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
