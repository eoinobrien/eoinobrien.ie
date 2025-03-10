export type PostLink = {
  url: string;
  title?: string;
  type?: PostLinkType;
}

export enum PostLinkType {
  PROJECT,
  CODE,
  EXTERNAL,
  VIA
}