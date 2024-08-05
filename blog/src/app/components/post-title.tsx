import { ReactNode } from "react";
import Link from "next/link";

export enum PostTitleSize {
  Small,
  Medium,
  Large,
}

type Props = {
  size?: PostTitleSize;
  linkSlug?: string;
  className?: string;
  children?: ReactNode;
};

export function PostTitle({
  size = PostTitleSize.Large,
  linkSlug,
  className,
  children,
}: Props) {
  const postTitle = (
    <h1
      className={
        (className ? `${className} ` : "") +
        `${
          size === PostTitleSize.Small
            ? "text-xl "
            : size === PostTitleSize.Medium
            ? "text-2xl "
            : size === PostTitleSize.Large
            ? "text-5xl md:text-6xl "
            : ""
        }` +
        "font-bold tracking-tight leading-tight"
      }
    >
      {children}
    </h1>
  );

  return (
    <>
      {linkSlug ? (
        <Link href={`/posts/` + linkSlug}>{postTitle}</Link>
      ) : (
        postTitle
      )}
    </>
  );
}
