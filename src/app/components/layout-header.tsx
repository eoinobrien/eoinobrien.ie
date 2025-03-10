import Link from "next/link";

export function LayoutHeader() {
  return (
    <div className="p-4 border-b-4 border-dotted bg-eoinblue-50 border-eoinblue-300 dark:bg-eoinblue-900  dark:border-eoinblue-600">
      <div className="flex max-w-5xl mx-auto">
        <h1 className="flex-1 font-extrabold text-2xl">
          <Link href="/" className="decoration-transparent">
            Eoin O&apos;Brien
          </Link>
        </h1>
        <div>
          <Link href="/" className="m-1">
            Home
          </Link>
          <Link href="/posts" className="m-1">
            Posts
          </Link>
          <Link href="/projects" className="m-1">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
