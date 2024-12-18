import { Metadata } from "next";
import { getAllPosts } from "@/lib/post-api";
import { FullPostCard } from "../components/full-post-card";
import Link from "next/link";
import { PostType } from "@/interfaces/post";

export default async function Page() {
  const posts = (await getAllPosts(PostType.POST)).slice(0, 10);

  return (
    <main className="flex flex-col divide-y-4 divide-stone-400 divide-dotted">
      {posts.map((post, index) => (
        <FullPostCard {...post} linkSlug={post.slug} key={index} />
      ))}

      <Link href="archive" className="text-center p-4 font-bold hover:bg-stone-200 hover:text-blue-700">
        All posts
      </Link>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Posts by Eoin O'Brien",
  openGraph: {
    title: "Posts by Eoin O'Brien",
  },
};
