import { Metadata } from "next";
import { getAllPosts } from "@/lib/post-api";
import { FullPostCard } from "@/app/components/full-post-card";
import Link from "next/link";
import { PostType } from "@/interfaces/post";
import { SplitView } from "../components/split-view";
import { PostTitle, PostTitleSize } from "../components/post-title";

export default async function Page() {
  const posts = (await getAllPosts(PostType.POST)).slice(0, 10);

  const categoryCount = posts.reduce((acc, post) => {
    post.categories &&
      post.categories.forEach((category) => {
        acc[category.slug] = {
          title: category.title,
          count: (acc[category.slug]?.count || 0) + 1,
        };
      });
    return acc;
  }, {} as Record<string, { title: string; count: number }>);

  return (
    <main className="w-full flex flex-col divide-y-4 divide-eoinblue-400 divide-dotted">
      {posts.map((post, index) => (
        <SplitView
          key={index}
          left={<FullPostCard {...post} linkSlug={post.slug} key={index} />}
          right={index === 0 &&
            <>
              <PostTitle
                size={PostTitleSize.Medium}
                className="my-4 text-center"
              >
                All categories
              </PostTitle>

              <ul className="text-center">
                {Object.entries(categoryCount).map(
                  ([slug, { title, count }]) => (
                    <li key={slug}>
                      <Link
                        href={`/categories/${slug}`}
                        className="no-underline hover:underline"
                      >
                        {title} ({count})
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </>
          }
        />
      ))}
      <Link
        href="archive"
        className="text-center p-4 font-bold hover:bg-eoinblue-50 hover:text-eoinblue-700"
      >
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
