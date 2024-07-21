import { Category } from "@/interfaces/category";
import Link from "next/link";

type Props = {
  category?: Category;
};

export function PostCategory({ category }: Props) {
  return (
    <>
      {category && category.title && (
        <div className="text-sm uppercase">
          <Link
            href={"/categories/" + category.slug}
            className="decoration-transparent hover:decoration-inherit focus:decoration-inherit"
          >
            {category.title}
          </Link>
        </div>
      )}
    </>
  );
}
