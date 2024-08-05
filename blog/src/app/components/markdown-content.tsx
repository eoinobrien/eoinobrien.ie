import { ReactNode } from "react";
import markdownStyles from "./markdown-styles.module.css";

type MarkdownContentDangerousHtmlProps = {
  content: string;
};

export function MarkdownContentDangerousHtml({
  content,
}: MarkdownContentDangerousHtmlProps) {
  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

type MarkdownContentProps = {
  children: ReactNode;
};

export function MarkdownContent({ children }: MarkdownContentProps) {
  return <div className={markdownStyles["markdown"]}>{children}</div>;
}
