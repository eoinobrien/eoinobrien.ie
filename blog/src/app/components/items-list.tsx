import Link from "next/link";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./post-title";

type Props = {
  title: string;
  path: string;
  items: { slug: string; title: string; date?: string }[];
};

export function ItemsList({ title, path, items }: Props) {
  return (
    <div>
      <header className="mb-12">
        <PostTitle>{title}</PostTitle>
      </header>
      {items.map((item, index) => (
        <div className="flex justify-between" key={index}>
          <Link href={`/${path}/` + item.slug}>{item.title}</Link>
          {item.date && (
            <DateFormatter dateString={item.date} includeDay={false} />
          )}
        </div>
      ))}
    </div>
  );
}
