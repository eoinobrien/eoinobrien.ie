import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

type ExternalLinkProps = {
  linkText: string;
  url: string;
};

export function ExternalLink({ linkText, url }: ExternalLinkProps) {
  return (
    <a href={url}>{linkText}<ArrowTopRightOnSquareIcon className='ml-1 size-4 inline-block' /></a>
  );
}
