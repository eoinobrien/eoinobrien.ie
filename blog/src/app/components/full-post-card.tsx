import { CoverImage } from "@/interfaces/cover-image";
import { type Author } from "@/interfaces/author";
import { Category } from "@/interfaces/category";
import { PostHeader } from "./post-header";
import { Card } from "./card";
import { MarkdownContentDangerousHtml } from "./markdown-content";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  title: string;
  subtitle?: string;
  date: string;
  content: string;
  image?: CoverImage;
  authors?: Author[];
  categories?: Category[];
  linkSlug?: string;
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
}: Props) {
  return (
    <Card>
      <main className="flex flex-col gap-y-4">
        <PostHeader
          title={title}
          subtitle={subtitle}
          date={date}
          authors={authors}
          coverImage={image}
          categories={categories}
          linkSlug={linkSlug}
        />
        <MarkdownContentDangerousHtml content={content} />
      </main>
    </Card>
  );
}
