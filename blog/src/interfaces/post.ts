import { type Author } from "./author";
import { Category } from "./category";
import { CoverImage } from "./cover-image";

export type Post = {
  slug: string;
  title: string;
  date: string;
  image?: CoverImage;
  authors: Author[];
  excerpt: string;
  content: string;
  preview?: boolean;
  categories?: Category[];
  tags?: string[];
};
