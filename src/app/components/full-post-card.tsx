import { CoverImage } from "@/interfaces/cover-image";
import { type Author } from "@/interfaces/author";
import { Category } from "@/interfaces/category";
import { PostHeader } from "./post-header";
import { Card } from "./card";
import { MarkdownContentDangerousHtml } from "./markdown-content";
import { ProjectLinks } from "@/interfaces/project";
import { LinkPostLinks } from "@/interfaces/link-post";

type Props = {
  title: string;
  subtitle?: string;
  date: string;
  content: string;
  image?: CoverImage;
  authors?: Author[];
  categories?: Category[];
  linkSlug?: string;
  links?: ProjectLinks | LinkPostLinks;
  className?: string;
};

export async function FullPostCard({
  title,
  subtitle,
  date,
  content,
  image,
  authors,
  categories,
  linkSlug,
  links,
  className,
}: Props) {
  function isProjectLinks(links: ProjectLinks | LinkPostLinks): links is ProjectLinks {
    return (links as ProjectLinks).projectUrl !== undefined || (links as ProjectLinks).codeUrl !== undefined;
  }
  
  function isLinkPostLinks(links: ProjectLinks | LinkPostLinks): links is LinkPostLinks {
    return (links as LinkPostLinks).url !== undefined;
  }

  let titleLink: string | undefined;
  
  if (content && linkSlug) {
    titleLink = `/posts/${linkSlug}`;
  } else if (links) {
    if (isProjectLinks(links)) {
      titleLink = links.projectUrl ?? links.codeUrl;
    } else if (isLinkPostLinks(links)) {
      titleLink = links.url;
    }
  }

  return (
    <Card className={className}>
      <main className="w-full max-w-3xl flex flex-col gap-y-4 my-4">
        <PostHeader
          title={title}
          subtitle={subtitle}
          date={date}
          authors={authors}
          coverImage={image}
          categories={categories}
          linkUrl={titleLink}
          projectUrl={links && isProjectLinks(links) ? links.projectUrl : undefined}
          codeUrl={links && isProjectLinks(links) ? links.codeUrl : undefined}
        />
        <MarkdownContentDangerousHtml content={content} />
      </main>
    </Card>
  );
}
