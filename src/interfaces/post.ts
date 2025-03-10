import { type Author } from "./author";
import { Category } from "./category";
import { CoverImage } from "./cover-image";
import { PostLink } from "./post-links";

export type PostMatter = {
  types: PostType[];
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image?: CoverImage;
  authors?: Author[];
  categories?: Category[];
  links?: PostLink[];
}

export interface Post extends PostMatter {
  content: string;
  feedContent: string;
};

export enum PostType {
  POST,
  PROJECT,
  LINK,
}
