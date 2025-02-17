import { Metadata } from "next";
import {
  getAllPostCategories,
  getAllPosts,
  getPostsByCategory,
} from "@/lib/post-api";
import { ItemsList } from "@/app/components/items-list";
import { Category } from "@/interfaces/category";
import { Post } from "@/interfaces/post";
import { PostTitle, PostTitleSize } from "@/app/components/post-title";
import Link from "next/link";
import { SplitView } from "@/app/components/split-view";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page(props: Params) {
  const params = await props.params;
  const categoryPosts = await getPostsByCategory(params.slug);

  const categories = await getAllPostCategories();

  return (
    <SplitView
      left={
        <>
          <PostTitle className="m-4">
            {getCategoryTitle(params.slug, categoryPosts)}
          </PostTitle>
          <ItemsList path="posts" items={categoryPosts} />
        </>
      }
      right={
        <>
          <PostTitle size={PostTitleSize.Medium} className="my-4 text-center">
            All categories
          </PostTitle>

          <ul className="text-center">
            {categories.map(category => (
              <li key={category.slug}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="no-underline hover:underline"
                >
                  {category.title} ({category.count ?? 0})
                </Link>
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}

function getCategoryTitle(slug: string, posts: Post[]) {
  if (posts.length > 0) {
    const category = posts[0].categories?.find(
      (category) => category.slug == slug
    );

    return category?.title ?? slug;
  }

  return slug;
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const posts = await getPostsByCategory(params.slug);

  var title = `${params.slug} posts by Eoin O'Brien`;

  if (posts.length > 0) {
    const category = posts[0].categories?.find(
      (category) => category.slug == params.slug
    );

    title = `${category?.title} posts by Eoin O'Brien`;
  }

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const categories = await getAllPostCategories();

  return categories.map((category: Category) => ({
    slug: category.slug,
  }));
}
