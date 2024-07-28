import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import { PostTitle, PostTitleSize } from "./post-title";
import { CoverImage } from "@/interfaces/cover-image";

type Props = {
  path: string;
  items: { slug: string; title: string; date?: string; image?: CoverImage }[];
};

export function CompressedItemsList({ path, items }: Props) {
  return (
    <div className="flex flex-col gap-y-4 grow">
      {items.map((item, index) => (
        <div key={index} className="pt-4">
          <Link
            href={`/${path}/` + item.slug}
            className="decoration-transparent"
          >
            <PostTitle
              size={PostTitleSize.Small}
              className="font-normal underline hover:decoration-transparent focus:decoration-transparent transition-all duration-300"
            >
              {item.title}
            </PostTitle>
          </Link>
          {item.date && (
            <span className="text-xs text-zinc-600 dark:text-zinc-400">
              <DateFormatter dateString={item.date} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
