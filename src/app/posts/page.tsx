import { Metadata } from "next";
import { getPageByPostType } from "@/app/components/list-posts-by-type";

export default async function Page() {
  return await getPageByPostType();
}

export const metadata: Metadata = {
  title: "Posts by Eoin O'Brien",
  openGraph: {
    title: "Posts by Eoin O'Brien",
  },
};
