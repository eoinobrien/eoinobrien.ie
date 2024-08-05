import { type Author } from "./author";
import { Category } from "./category";
import { CoverImage } from "./cover-image";

export type Post = {
  types: PostType[];
  slug: string;
  title: string;
  date: string;
  image?: CoverImage;
  authors: Author[];
  content: string;
  preview?: boolean;
  categories?: Category[];
  tags?: string[];
};

export enum PostType {
  POST,
  PROJECT
}