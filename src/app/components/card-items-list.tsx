import { Project } from "@/interfaces/project";
import { PostTitle, PostTitleSize } from "./post-title";
import Link from "next/link";

type Props = {
  items: Project[];
};

export async function CardItemsList({ items }: Props) {
  return (
    <div className="flex flex-col gap-y-4">
      {await items.map(async (item, index) => {
        return (
          <div key={index} className="">
            <PostTitle
              size={PostTitleSize.Small}
              linkUrl={item.links?.projectUrl ?? item.links?.codeUrl}
              className="font-normal underline hover:decoration-transparent focus:decoration-transparent transition-all duration-300"
            >
              {item.title}
            </PostTitle>
            {item.subtitle && <span>{item.subtitle}</span>}
            {item.slug && item.content && (
              <span>
                {" "}
                <Link
                  href={`/posts/${item.slug}`}
                  className="italic text-sm font-heading no-underline hover:underline"
                >
                  Read more
                </Link>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
