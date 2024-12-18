import { Metadata } from "next";
import Content from "./content.mdx";
import { PostTitle } from "../components/post-title";
import markdownStyles from "../components/markdown-styles.module.css";

export default async function Page() {
  return (
    <main className="center-content">
      <PostTitle>Contact</PostTitle>
      <div className={markdownStyles["markdown"]}>
        <Content />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Contact Eoin O'Brien",
  openGraph: {
    title: "Contact Eoin O'Brien",
  },
};
