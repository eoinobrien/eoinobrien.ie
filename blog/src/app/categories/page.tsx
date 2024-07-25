import { Metadata } from "next";
import { getAllPostCategories } from "@/lib/post-api";
import { ItemsList } from "../components/items-list";

export default async function Page() {
  const categories = getAllPostCategories();

  return (
    <main className="mt-4">
      <ItemsList title="Post categories" path="categories" items={categories} />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Post categories by Eoin O'Brien",
  openGraph: {
    title: "Post categories by Eoin O'Brien",
  },
};
