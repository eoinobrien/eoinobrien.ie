import { Metadata } from "next";
import { getAllPostCategories, getPostsByCategory } from "@/lib/post-api";
import { ItemsList } from "@/app/components/items-list";
import { notFound } from "next/navigation";
import { Category } from "@/interfaces/category";
import { Post } from "@/interfaces/post";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Params) {
  const posts = getPostsByCategory(params.slug);

  return (
    <main>
      <ItemsList title={getCategoryTitle(params.slug, posts)} path="posts" items={posts} />
    </main>
  );
}

function getCategoryTitle(slug: string, posts: Post[]) {
  if (posts.length > 0) {
    const category = posts[0].categories?.find(
      (category) => category.slug == slug
    );

    return category?.title ?? slug
  }

  return slug;
}

// export function generateMetadata({ params }: Params): Metadata {
//   const posts = getPostsByCategory(params.slug);

//   if (posts.length < 1) {
//     return notFound();
//   }

//   const category = posts[0].categories?.find(
//     (category) => category.slug == params.slug
//   );

//   const title = `${category?.title} by Eoin O'Brien`;

//   return {
//     title,
//     openGraph: {
//       title,
//     },
//   };
// }

export async function generateStaticParams() {
  const categories = getAllPostCategories();

  return categories.map((category: Category) => ({
    slug: category.slug,
  }));
}
