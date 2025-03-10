import { CoverImage } from "@/interfaces/cover-image";
import { PostTitle, PostTitleSize } from "./post-title";
import { type Author } from "@/interfaces/author";
import { PostCoverImage } from "./post-cover-image";
import { PostAuthors } from "./post-author";

type Props = {
  title: string;
  subtitle?: string;
  coverImage?: CoverImage;
  authors?: Author[];
  titleLinkUrl?: string;
};

export function PostHeader({
  title,
  subtitle,
  coverImage,
  authors,
  titleLinkUrl,
}: Props) {
  return (
    <header>
      <PostTitle linkUrl={titleLinkUrl}>{title}</PostTitle>

      {subtitle && (
        <PostTitle
          size={PostTitleSize.Small}
          className="italic font-normal text-stone-600 dark:text-stone-400"
        >
          {subtitle}
        </PostTitle>
      )}

      <PostAuthors authors={authors} />

      {coverImage?.path && <PostCoverImage {...coverImage} />}
    </header>
  );
}
