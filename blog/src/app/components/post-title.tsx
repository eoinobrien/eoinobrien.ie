import { Category } from "@/interfaces/category";
import { ReactNode } from "react";
import { PostCategory } from "./post-category";

export enum PostTitleSize {
  Small,
  Normal,
  Large,
}

type Props = {
  categories?: Category[];
  size?: PostTitleSize;
  className?: string;
  children?: ReactNode;
};

export function PostTitle({
  categories,
  size = PostTitleSize.Large,
  className,
  children,
}: Props) {
  return (
    <>
      {categories &&
        categories.map((category, index) => (
          <PostCategory category={category} key={index} />
        ))}
      <h1
        className={
          (className ? `${className} ` : "") +
          `${
            size === PostTitleSize.Small ? "text-xl " :
            size === PostTitleSize.Normal ? "text-2xl " :
            size === PostTitleSize.Large ? "text-5xl md:text-6xl " :
            ""
          }` +
          "font-bold tracking-tight leading-tight"
        }
      >
        {children}
      </h1>
    </>
  );
}
