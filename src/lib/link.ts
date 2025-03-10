import { PostLink, PostLinkType } from "@/interfaces/post-links";

export function getLinkDomain(url: string): string {
  const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
  return domain.replace("www.", "");
};

export function getLinkText(link: PostLink): string {
  if (link.title) {
    return link.title;
  }

  let domain = getLinkDomain(link.url);

  switch (link.type) {
    case PostLinkType.PROJECT:
      return `Project website (${domain})`;
    case PostLinkType.CODE:
      return `Source code (${domain})`;
    case PostLinkType.EXTERNAL:
      return `Via ${domain}`;
  }

  return domain;
}
