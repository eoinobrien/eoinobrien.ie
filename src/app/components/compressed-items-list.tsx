import DateFormatter from "./date-formatter";
import { PostTitle, PostTitleSize } from "./post-title";

type Props = {
  items: { url: string; title: string; subtitle?: string; date?: string }[];
};

export async function CompressedItemsList({ items }: Props) {
  return (
    <div className="flex flex-col gap-y-4 grow">
      {await items.map(async (item, index) => {
        return (
          <div key={index}>
            <PostTitle
              size={PostTitleSize.Small}
              linkUrl={item.url}
              className="font-normal underline hover:decoration-transparent focus:decoration-transparent transition-all duration-300"
            >
              {item.title}
            </PostTitle>
            {item.date && (
              <span className="text-xs text-stone-600 dark:text-stone-400">
                <DateFormatter dateString={item.date} />
              </span>
            )}
            {item.subtitle && <span>{item.subtitle}</span>}
          </div>
        );
      })}
    </div>
  );
}
