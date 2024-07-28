import { Category } from "@/interfaces/category";
import { ReactNode } from "react";
import { PostCategory } from "./post-category";

type Props = {
  categories?: Category[];
  small?: boolean;
  className?: string;
  children?: ReactNode;
};

export function PostTitle({ categories, small, className, children }: Props) {
  return (
    <>
      {categories &&
        categories.map((category, index) => (
          <PostCategory category={category} key={index} />
        ))}
      <h1
        className={
          className +
          " " +
          (small ? "text-2xl " : "text-4xl md:text-5xl ") +
          "font-bold tracking-tight leading-tight"
        }
      >
        {children}
      </h1>
    </>
  );
}
