import { CoverImage } from "@/interfaces/cover-image";
import { type Author } from "@/interfaces/author";
import { Category } from "@/interfaces/category";
import { PostHeader } from "./post-header";
import { Card } from "./card";
import { MarkdownContentDangerousHtml } from "./markdown-content";
import { ProjectLinks } from "@/interfaces/project";

type Props = {
  title: string;
  subtitle?: string;
  date: string;
  content: string;
  image?: CoverImage;
  authors?: Author[];
  categories?: Category[];
  linkSlug?: string;
  links?: ProjectLinks;
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
  const titleLink = content
    ? linkSlug && `/posts/${linkSlug}`
    : links?.projectUrl ?? links?.codeUrl;

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
          projectUrl={links?.projectUrl}
          codeUrl={links?.codeUrl}
        />
        <MarkdownContentDangerousHtml content={content} />
      </main>
    </Card>
  );
}
