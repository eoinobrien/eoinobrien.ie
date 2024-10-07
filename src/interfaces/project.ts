import { Post } from "./post";

export interface Project extends Post {
  status?: ProjectStatus;
  links?: ProjectLinks;
}

export type ProjectLinks = {
  codeUrl?: string;
  projectUrl?: string;
}

export enum ProjectStatus {
  OFFLINE,
}