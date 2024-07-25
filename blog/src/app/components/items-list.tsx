import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./post-title";
import { CoverImage } from "@/interfaces/cover-image";

type Props = {
  title: string;
  path: string;
  items: { slug: string; title: string; date?: string; image?: CoverImage }[];
};

export function ItemsList({ title, path, items }: Props) {
  return (
    <div>
      <PostTitle>{title}</PostTitle>
      {items.map((item, index) => (
        <Link
          href={`/${path}/` + item.slug}
          className="decoration-transparent"
          key={index}
        >
          <div className="my-4 rounded-md bg-zinc-100 dark:bg-zinc-900 p-4">
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
            <h1 className="text-zinc-950 dark:text-zinc-50 text-2xl mb-2 font-bold tracking-tight leading-tight underline hover:decoration-transparent focus:decoration-transparent transition-all duration-300">
              {item.title}
            </h1>
            {item.date && (
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                <DateFormatter dateString={item.date} includeDay={false} />
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
