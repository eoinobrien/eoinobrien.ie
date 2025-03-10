import { Processor, unified } from "unified";
import emoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import supersub from "remark-supersub";
import { s } from "hastscript";

export async function markdownToHtml(
  processor: Processor<any, any, any, any, string>,
  markdown: string
) {
  const result = await processor.process(markdown);
  return result.toString();
}

export async function getMarkdownProcessor(
  simplified: boolean = false
): Promise<Processor<any, any, any, any, string>> {
  var processor = await unified()
    .use(remarkParse)
    .use(supersub)
    .use(emoji, { accessible: true })
    .use(remarkGfm, { singleTilde: false })
    .use(remarkRehype)
    .use(rehypeSlug);

  if (simplified)
  {
  }

  if (!simplified) {
    processor = processor
      .use(rehypePrettyCode, {
        theme: "github-dark-default",
        keepBackground: false,
        defaultLang: "plaintext",
        transformers: [
          transformerCopyButton({
            feedbackDuration: 3_000,
          }),
        ],
      })
      .use(rehypeAutolinkHeadings, {
        behavior: "append",
        content: s(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
          },
          s("path", {
            fillRule: "evenodd",
            d: "M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z",
            clipRule: "evenodd",
          })
        ),
      });
  }

  return processor.use(rehypeStringify);
}
