import { Metadata } from "next";
import Content from "./content.mdx";
import { PostTitle } from "../components/post-title";
import markdownStyles from "../components/markdown-styles.module.css";

export default async function Page() {
  return (
    <main>
      <PostTitle>Feeds</PostTitle>
      <div className={markdownStyles["markdown"]}>
        <Content />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Feeds for Eoin O'Brien",
  openGraph: {
    title: "Feeds for Eoin O'Brien",
  },
};
