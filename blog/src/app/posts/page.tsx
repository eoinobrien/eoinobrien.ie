import { Metadata } from "next";
import { getAllPosts } from "@/lib/post-api";
import { ItemsList } from "../components/items-list";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <main>
      <ItemsList title="Posts" path="posts" items={posts} />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Posts by Eoin O'Brien",
  openGraph: {
    title: "Posts by Eoin O'Brien",
  },
};