import Link from "next/link";

export function LayoutHeader() {
  return (
    <div>
      <div className="flex my-4 max-w-5xl mx-auto">
        <Link href="/" className="flex-1 font-extrabold no-underline text-zinc-950 dark:text-zinc-50">
          <h1>Eoin O'Brien</h1>
        </Link>
        <div>
          <Link href="/" className="m-1">
            Home
          </Link>
          <Link href="/posts" className="m-1">
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
