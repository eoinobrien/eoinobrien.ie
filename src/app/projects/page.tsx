import { Metadata } from "next";
import { PostType } from "@/interfaces/post";
import { getPageByPostType } from "@/app/components/list-posts-by-type";

export default async function Page() {
  return await getPageByPostType(PostType.PROJECT);
}

export const metadata: Metadata = {
  title: "Projects by Eoin O'Brien",
  openGraph: {
    title: "Projects by Eoin O'Brien",
  },
};
