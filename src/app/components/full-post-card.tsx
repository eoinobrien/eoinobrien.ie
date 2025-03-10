import { CoverImage } from "@/interfaces/cover-image";
import { type Author } from "@/interfaces/author";
import { Category } from "@/interfaces/category";
import { PostHeader } from "./post-header";
import { Card } from "./card";
import { MarkdownContentDangerousHtml } from "./markdown-content";
import { PostFooter } from "./post-footer";
import { PostLink } from "@/interfaces/post-links";

type Props = {
  title: string;
  subtitle?: string;
  date: string;
  content: string;
  image?: CoverImage;
  authors?: Author[];
  categories?: Category[];
  linkSlug?: string;
  links?: PostLink[];
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
  return (
    <Card className={className}>
      <article className="w-full max-w-3xl flex flex-col gap-y-4 my-4">
        <PostHeader
          title={title}
          subtitle={subtitle}
          authors={authors}
          coverImage={image}
          titleLinkUrl={linkSlug && `/posts/${linkSlug}`}
        />
        <MarkdownContentDangerousHtml content={content} />
        <PostFooter publishedDate={date}
          categories={categories}
          links={links} />
      </article>
    </Card>
  );
}
