import { Category } from "@/interfaces/category";
import Link from "next/link";

type PostCategoryProps = {
  category?: Category;
};

export function PostCategory({ category }: PostCategoryProps) {
  return (
    category &&
    category.title && (
      <span className="text-sm text-blue-600 dark:text-blue-400">
        <Link
          href={"/categories/" + category.slug}
          className="decoration-transparent hover:decoration-inherit focus:decoration-inherit"
        >
          {category.title}
        </Link>
      </span>
    )
  );
}

type PostCategoriesProps = {
  categories?: Category[];
};

export function PostCategories({ categories }: PostCategoriesProps) {
  return (
    categories &&
    categories.length > 0 &&
    categories.map((category, index) => (
      <PostCategory category={category} key={index} />
    ))
  );
}
