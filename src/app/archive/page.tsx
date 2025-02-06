import { Metadata } from "next";
import { getAllPosts } from "@/lib/post-api";
import { ItemsList } from "../components/items-list";
import { PostTitle } from "../components/post-title";
import { SplitView } from "../components/split-view";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <main className="w-full flex flex-col divide-y-4 divide-eoinblue-400 divide-dotted">
      <SplitView
        left={
          <>
            <PostTitle className="my-4">All posts</PostTitle>
            <ItemsList path="posts" items={posts} />
          </>
        }
      />
    </main>
  );
}

export const metadata: Metadata = {
  title: "All posts by Eoin O'Brien",
  openGraph: {
    title: "All posts by Eoin O'Brien",
  },
};
