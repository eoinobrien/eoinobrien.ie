import { Metadata } from "next";
import { getAllPosts } from "@/lib/post-api";
import { ItemsList } from "../components/items-list";
import { PostTitle } from "../components/post-title";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <main>
      <PostTitle className="mb-4">Posts</PostTitle>
      <ItemsList path="posts" items={posts} />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Posts by Eoin O'Brien",
  openGraph: {
    title: "Posts by Eoin O'Brien",
  },
};