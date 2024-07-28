import Content from "./content.mdx";
import { getAllPosts } from "@/lib/post-api";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Content posts={posts} />
    </main>
  );
}
