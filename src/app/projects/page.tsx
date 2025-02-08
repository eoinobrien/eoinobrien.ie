import { Metadata } from "next";
import { PostType } from "@/interfaces/post";
import { getPageByPostType } from "@/app/posts/page";


export default async function Page() {
  return await getPageByPostType(PostType.PROJECT);
}

export const metadata: Metadata = {
  title: "Posts by Eoin O'Brien",
  openGraph: {
    title: "Posts by Eoin O'Brien",
  },
};
