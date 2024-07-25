import Content from "./content.mdx";
import markdownStyles from "./components/markdown-styles.module.css";

export default function Home() {
  return (
    <main className="">
      <div className={markdownStyles["markdown"]}>
        <Content />
      </div>
    </main>
  );
}
