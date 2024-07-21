import { Category } from "@/interfaces/category";
import { ReactNode } from "react";
import { PostCategory } from "./post-category";

type Props = {
  categories?: Category[];
  children?: ReactNode;
};

export function PostTitle({ categories, children }: Props) {
  return (
    <div className="mb-8">
      {categories &&
        categories.map((category, index) => (
          <PostCategory category={category} key={index} />
        ))}
      <h1 className="text-5xl font-bold tracking-tight leading-tight">
        {children}
      </h1>
    </div>
  );
}
