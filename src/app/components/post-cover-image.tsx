import Image from "next/image";
import { CoverImage } from "@/interfaces/cover-image";

export function PostCoverImage({ path, alt, caption }: CoverImage) {
  return (
    <figure>
      <Image
        src={path}
        width={500}
        height={500}
        alt={alt}
        priority={true}
        style={{ width: "100%" }}
        className="max-h-[50vh] max-w-full object-cover object-center rounded"
      />
      {caption && (
        <figcaption
          className="italic text-xs text-right text-zinc-600 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: caption }}></figcaption>
      )}
    </figure>
  );
}
