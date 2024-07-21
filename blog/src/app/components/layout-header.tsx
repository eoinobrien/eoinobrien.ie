import Link from "next/link";

export function LayoutHeader() {
  return (
    <div>
      <div className="flex my-4 max-w-5xl mx-auto">
        <h1 className="flex-1">Eoin O'Brien</h1>
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
