import { Metadata } from "next";
import { getAllPostCategories } from "@/lib/post-api";
import { ItemsList } from "../components/items-list";
import { PostTitle } from "../components/post-title";
import { SplitView } from "../components/split-view";

export default async function Page() {
  const categories = await getAllPostCategories();

  return (
    <SplitView
      left={
        <>
          <PostTitle className="m-4">Post categories</PostTitle>
          <ItemsList
            path="categories"
            items={categories.map(category => ({
              ...category,
              title: `${category.title} (${category.count ?? 0})`
            }))}
          />
        </>
      }
    />
  );
}

export const metadata: Metadata = {
  title: "Post categories by Eoin O'Brien",
  openGraph: {
    title: "Post categories by Eoin O'Brien",
  },
};
