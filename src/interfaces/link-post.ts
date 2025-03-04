import { Post } from "./post";

export interface LinkPost extends Post {
  links: LinkPostLinks;
}

export type LinkPostLinks = {
  url: string;
}