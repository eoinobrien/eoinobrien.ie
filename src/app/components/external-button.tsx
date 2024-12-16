import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

type ExternalButtonProps = {
  linkText: string;
  url: string;
};

export function ExternalButton({ linkText, url }: ExternalButtonProps) {
  return (
    <a href={url} className='hover:text-stone-50 text-stone-800'><div className='px-2 py-1 rounded bg-stone-300 hover:bg-stone-500'>{linkText}<ArrowTopRightOnSquareIcon className='ml-1 size-4 inline-block' /></div></a>
  );
}
