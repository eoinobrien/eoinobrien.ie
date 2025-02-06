import { CoverImage } from "@/interfaces/cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle, PostTitleSize } from "./post-title";
import { type Author } from "@/interfaces/author";
import { PostCoverImage } from "./post-cover-image";
import { Category } from "@/interfaces/category";
import { PostAuthors } from "./post-author";
import { PostCategories } from "./post-category";
import { ExternalButton } from "./external-button";

type Props = {
  title: string;
  subtitle?: string;
  coverImage?: CoverImage;
  date: string;
  authors?: Author[];
  categories?: Category[];
  linkUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
};

export function PostHeader({
  title,
  subtitle,
  coverImage,
  date,
  authors,
  categories,
  linkUrl,
  projectUrl,
  codeUrl,
}: Props) {
  return (
    <>
      <PostTitle linkUrl={linkUrl}>{title}</PostTitle>

      {subtitle && (
        <PostTitle
          size={PostTitleSize.Small}
          className="italic font-normal text-stone-600 dark:text-stone-400"
        >
          {subtitle}
        </PostTitle>
      )}

      <div className="text-sm text-stone-600 dark:text-stone-400">
        {[
          <DateFormatter dateString={date} key="1" />,
          authors &&
            (authors[0].name != "Eoin O'Brien" || authors.length > 1) && (
              <PostAuthors authors={authors} key="2" />
            ),
          categories && categories.length > 0 && (
            <PostCategories categories={categories} key="3" />
          ),
          (projectUrl || codeUrl) && (
            <span className="inline-flex gap-2">
              {projectUrl && (
                <ExternalButton
                  key="4"
                  url={projectUrl}
                  linkText="Project website"
                />
              )}
              {codeUrl && (
                <ExternalButton key="5" url={codeUrl} linkText="Source code" />
              )}
            </span>
          ),
        ]
          .filter((element) => {
            return element;
          })
          .map((section, index) => (
            <span key={index}>
              {!!index && (
                <span className="px-2" aria-hidden>
                  <wbr />•<wbr />
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
