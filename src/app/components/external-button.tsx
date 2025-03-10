import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type ExternalButtonProps = {
  linkText: string;
  url: string;
};

export function ExternalButton({ linkText, url }: ExternalButtonProps) {
  return (
    <span>
      <a
        href={url}
        className="no-underline px-2 py-0.5 text-sm rounded w-fit transition-all
        text-eoinblue-700 hover:text-eoinblue-50 bg-eoinblue-100 hover:bg-eoinblue-600 
        dark:text-eoinblue-200 dark:hover:text-eoinblue-900 dark:bg-eoinblue-800 dark:hover:bg-eoinblue-400"
      >
        {linkText}
        <ArrowTopRightOnSquareIcon className="ml-1 size-4 inline-block align-text-bottom" />
      </a>
    </span>
  );
}
