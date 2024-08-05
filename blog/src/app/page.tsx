import Content from "./content.mdx";
import { getAllPosts } from "@/lib/post-api";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <Content posts={posts} />
    </main>
  );
}
