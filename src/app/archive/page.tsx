import { Metadata } from "next";
import { getAllPosts } from "@/lib/post-api";
import { ItemsList } from "../components/items-list";
import { PostTitle } from "../components/post-title";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <main className="mt-4">
      <PostTitle className="mb-4">All posts</PostTitle>
      <ItemsList path="posts" items={posts} />
    </main>
  );
}

export const metadata: Metadata = {
  title: "All posts by Eoin O'Brien",
  openGraph: {
    title: "All posts by Eoin O'Brien",
  },
};
