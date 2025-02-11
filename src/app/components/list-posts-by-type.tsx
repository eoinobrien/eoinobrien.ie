import { PostType } from "@/interfaces/post";
import { getAllPosts, getAllPostCategories } from "@/lib/post-api";
import Link from "next/link";
import { FullPostCard } from "./full-post-card";
import { PostTitle, PostTitleSize } from "./post-title";
import { SplitView } from "./split-view";

export async function getPageByPostType(type?: PostType) {
  const posts = (await getAllPosts(type)).slice(0, 10);
  const categories = await getAllPostCategories();

  return (
    <main className="w-full flex flex-col divide-y-4 divide-eoinblue-400 divide-dotted">
      {posts.map((post, index) => (
        <SplitView
          key={index}
          left={<FullPostCard {...post} linkSlug={post.slug} key={index} />}
          right={
            index === 0 && (
              <>
                <PostTitle
                  size={PostTitleSize.Medium}
                  className="my-4 text-center"
                >
                  All categories
                </PostTitle>

                <ul className="text-center">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/categories/${category.slug}`}
                        className="no-underline hover:underline"
                      >
                        {category.title} ({category.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )
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
