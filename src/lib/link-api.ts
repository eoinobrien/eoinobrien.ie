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
  var title: string | undefined = undefined;
  
  switch (link.type) {
    case PostLinkType.PROJECT:
      title = "Project website";
      break;
    case PostLinkType.CODE:
      title = "Source code";
      break;
  }

  if (title) {
    return title + " (" + domain + ")";
  }

  return domain;
}
