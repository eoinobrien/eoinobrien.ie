import { ReactNode } from "react";
import markdownStyles from "./markdown-styles.module.css";

type MarkdownContentDangerousHtmlProps = {
  content: string;
  className?: string;
};

export function MarkdownContentDangerousHtml({
  content,
  className,
}: MarkdownContentDangerousHtmlProps) {
  return (
    <div
      className={
        (className ? `${className} ` : "") + markdownStyles["markdown"]
      }
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

type MarkdownContentProps = {
  children: ReactNode;
  className?: string;
};

export function MarkdownContent({ children, className }: MarkdownContentProps) {
  return (
    <div
      className={
        (className ? `${className} ` : "") + markdownStyles["markdown"]
      }
    >
      {children}
    </div>
  );
}
