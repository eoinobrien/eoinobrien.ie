import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import { PostTitle, PostTitleSize } from "./post-title";
import { CoverImage } from "@/interfaces/cover-image";
import { Card } from "./card";

type Props = {
  path: string;
  items: { slug: string; title: string; date?: string; image?: CoverImage }[];
};

export function ItemsList({ path, items }: Props) {
  return (
    <div className="flex flex-col divide-y-4 divide-eoinblue-400 divide-dotted">
      {items.map((item, index) => (
        <Card className="group relative" key={index}>
          {item.image && (
            <Image
              src={item.image.path}
              width={500}
              height={500}
              alt={item.image.alt}
              priority={true}
              style={{ width: "100%" }}
              className="max-h-[20vh] mb-2 max-w-full object-cover object-center rounded"
            />
          )}
          <Link
            href={`/${path}/` + item.slug}
            className="decoration-transparent after:absolute after:inset-0"
          >
            <PostTitle
              size={PostTitleSize.Medium}
              className="mb-2 decoration-transparent group-hover:text-eoinblue-700 group-hover:dark:text-eoinblue-300 group-focus:text-eoinblue-700 group-focus:dark:text-eoinblue-300 group-hover:decoration-inherit group-focus:decoration-inherit transition-all duration-300"
            >
              {item.title}
            </PostTitle>
          </Link>
          {item.date && (
            <span className="text-sm text-stone-600 dark:text-stone-400 decoration-transparent">
              <DateFormatter dateString={item.date} />
            </span>
          )}
        </Card>
      ))}
    </div>
  );
}
