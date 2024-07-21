import { unified } from "unified";
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

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(supersub)
    .use(emoji, { accessible: true })
    .use(remarkGfm, { singleTilde: false })
    .use(remarkRehype)
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
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      // content: "link"
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
