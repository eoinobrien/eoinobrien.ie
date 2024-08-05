import { CoverImage } from "@/interfaces/cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle, PostTitleSize } from "./post-title";
import { type Author } from "@/interfaces/author";
import { PostCoverImage } from "./post-cover-image";
import { Category } from "@/interfaces/category";
import { PostAuthors } from "./post-author";
import { PostCategories } from "./post-category";

type Props = {
  title: string;
  subtitle?: string;
  coverImage?: CoverImage;
  date: string;
  authors?: Author[];
  categories?: Category[];
  linkSlug?: string;
};

export function PostHeader({
  title,
  subtitle,
  coverImage,
  date,
  authors,
  categories,
  linkSlug,
}: Props) {
  return (
    <>
      <PostTitle linkSlug={linkSlug}>{title}</PostTitle>

      {subtitle && (
        <PostTitle
          size={PostTitleSize.Small}
          className="italic font-normal text-zinc-600"
        >
          {subtitle}
        </PostTitle>
      )}

      <div className="text-sm text-zinc-600 dark:text-zinc-400 inline-flex">
        {[
          <DateFormatter dateString={date} />,
          authors &&
            (authors[0].name != "Eoin O'Brien" || authors.length > 1) && (
              <PostAuthors authors={authors} />
            ),
          categories && categories.length > 0 && (
            <PostCategories categories={categories} />
          ),
        ]
          .filter((element) => {
            return element;
          })
          .map((section, index) => (
            <span key={index}>
              {!!index && (
                <span className="px-2" aria-hidden>
                  •
                </span>
              )}
              {section}
            </span>
          ))}
      </div>

      {coverImage?.path && <PostCoverImage {...coverImage} />}
    </>
  );
}
