import { Metadata } from "next";
import { getAllPosts } from "@/lib/post-api";
import { FullPostCard } from "../components/full-post-card";
import Link from "next/link";
import { PostType } from "@/interfaces/post";

export default async function Page() {
  const posts = (await getAllPosts(PostType.POST)).slice(0, 10);

  return (
    <main className="flex flex-col gap-4">
      {posts.map((post, index) => 
        <FullPostCard {...post} linkSlug={post.slug} key={index} />
      )}
      <Link href="archive" className="text-right">All posts</Link>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Posts by Eoin O'Brien",
  openGraph: {
    title: "Posts by Eoin O'Brien",
  },
};