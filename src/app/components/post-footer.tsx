import DateFormatter from "./date-formatter";
import { Category } from "@/interfaces/category";
import { PostCategories } from "./post-category";
import { ExternalButton } from "./external-button";
import { PostLink } from "@/interfaces/post-links";
import { getLinkText } from "@/lib/link";

type Props = {
  publishedDate: string;
  categories?: Category[];
  links?: PostLink[];
};

export function PostFooter({
  publishedDate,
  categories,
  links
}: Props) {
  return (
    <>
      {links && links.length > 0 && <div className="flex flex-row gap-2">
        {links.map((link, index) => (
          <ExternalButton key={index} url={link.url} linkText={getLinkText(link)} />
        ))}
      </div>}

      <div className="text-sm text-stone-600 dark:text-stone-400">
        <DateFormatter dateString={publishedDate} />
        {categories && categories.length > 0 && (
          <>
            <span className="px-2" aria-hidden>
              <wbr />•<wbr />
            </span>
            <PostCategories categories={categories} />
          </>
        )}
      </div>
    </>
  );
}
