import { ReactNode } from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export enum PostTitleSize {
  Small,
  Medium,
  Large,
}

type Props = {
  size?: PostTitleSize;
  linkUrl?: string;
  className?: string;
  children?: ReactNode;
};

const isExternalUrl = (url: string) => url.startsWith("http");

export function PostTitle({
  size = PostTitleSize.Large,
  linkUrl,
  className,
  children,
}: Props) {
  const postTitle = (
    <h1
      className={
        (className ? `${className} ` : "") +
        `${
          size === PostTitleSize.Small
            ? "text-lg "
            : size === PostTitleSize.Medium
            ? "text-2xl "
            : size === PostTitleSize.Large
            ? "text-3xl md:text-4xl "
            : ""
        }` +
        "font-bold tracking-tight leading-tight"
      }
    >
      {children}
      {linkUrl && isExternalUrl(linkUrl) && (
        <ArrowTopRightOnSquareIcon className="ml-1 size-4 inline-block" />
      )}
    </h1>
  );

  return <>{linkUrl ? <Link href={linkUrl}>{postTitle}</Link> : postTitle}</>;
}
