import { ReactNode } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function MarkdownContentDangerousHtml({ content }: Props) {
  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export function MarkdownContent({ children }: { children: ReactNode }) {
  return <div className={markdownStyles["markdown"]}>{children}</div>;
}
