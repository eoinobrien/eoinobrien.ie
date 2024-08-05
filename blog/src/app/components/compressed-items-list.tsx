import DateFormatter from "./date-formatter";
import { MarkdownContentDangerousHtml } from "./markdown-content";
import { PostTitle, PostTitleSize } from "./post-title";

type Props = {
  path: string;
  items: { slug: string; title: string; subtitle?: string; date?: string }[];
};

export async function CompressedItemsList({ path, items }: Props) {
  return (
    <div className="flex flex-col gap-y-4 grow">
      {await items.map(async (item, index) => {
        return (
          <div key={index}>
            <PostTitle
              size={PostTitleSize.Small}
              linkSlug={item.slug}
              className="font-normal underline hover:decoration-transparent focus:decoration-transparent transition-all duration-300"
            >
              {item.title}
            </PostTitle>
            {item.date && (
              <span className="text-xs text-zinc-600 dark:text-zinc-400">
                <DateFormatter dateString={item.date} />
              </span>
            )}
            {item.subtitle && (
              <MarkdownContentDangerousHtml content={item.subtitle} />
            )}
          </div>
        );
      })}
    </div>
  );
}
