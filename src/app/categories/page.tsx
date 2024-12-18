import { Metadata } from "next";
import { getAllPostCategories } from "@/lib/post-api";
import { ItemsList } from "../components/items-list";
import { PostTitle } from "../components/post-title";

export default async function Page() {
  const categories = await getAllPostCategories();

  return (
    <main className="center-content">
      <PostTitle className="mb-4">Post categories</PostTitle>
      <ItemsList path="categories" items={categories} />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Post categories by Eoin O'Brien",
  openGraph: {
    title: "Post categories by Eoin O'Brien",
  },
};
