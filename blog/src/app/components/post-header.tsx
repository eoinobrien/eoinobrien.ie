import { CoverImage } from "@/interfaces/cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./post-title";
import { type Author } from "@/interfaces/author";
import { PostCoverImage } from "./post-cover-image";
import { Category } from "@/interfaces/category";
import { PostAuthors } from "./post-author";

type Props = {
  title: string;
  coverImage?: CoverImage;
  date: string;
  authors?: Author[];
  categories?: Category[];
};

export function PostHeader({
  title,
  coverImage,
  date,
  authors,
  categories,
}: Props) {
  return (
    <>
      <PostTitle categories={categories}>{title}</PostTitle>

      <div className="text-sm">
        <PostAuthors authors={authors} />
        <span className="text-zinc-600 dark:text-zinc-400">
          <DateFormatter dateString={date} />
        </span>
      </div>

      {coverImage?.path && <PostCoverImage {...coverImage} />}
    </>
  );
}
