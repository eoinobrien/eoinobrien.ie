import Link from "next/link";

export function LayoutFooter() {
  return (
    <div>
      <div className="flex my-4 max-w-5xl mx-auto">
        <Link href="/contact" className="m-1">
          Contact
        </Link>
        <Link href="/feeds" className="m-1">
          Feeds
        </Link>
      </div>
    </div>
  );
}
