import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

import type { JSX } from "react";

type ExternalLinkProps = {
  linkText: string | JSX.Element;
  url: string;
};

export function ExternalLink({ linkText, url }: ExternalLinkProps) {
  return (
    <a href={url}>
      {linkText}
      <ArrowTopRightOnSquareIcon className="ml-1 size-4 inline-block" />
    </a>
  );
}
