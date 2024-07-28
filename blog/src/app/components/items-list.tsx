import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./post-title";
import { CoverImage } from "@/interfaces/cover-image";
import { Card } from "./card";

type Props = {
  title: string;
  path: string;
  items: { slug: string; title: string; date?: string; image?: CoverImage }[];
};

export function ItemsList({ title, path, items }: Props) {
  return (
    <div className="flex flex-col gap-y-4">
      <PostTitle>{title}</PostTitle>
      {items.map((item, index) => (
        <Link
          href={`/${path}/` + item.slug}
          className="decoration-transparent"
          key={index}
        >
          <Card>
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
            <PostTitle small className="text-zinc-950 dark:text-zinc-50 mb-2 underline hover:decoration-transparent focus:decoration-transparent transition-all duration-300">{item.title}</PostTitle>
            {item.date && (
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                <DateFormatter dateString={item.date} includeDay={false} />
              </span>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
}
