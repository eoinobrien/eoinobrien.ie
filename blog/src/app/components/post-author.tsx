import { Author } from "@/interfaces/author";

export function PostAuthors({ authors }: { authors?: Author[] }) {
  return (
    <div>
      {authors && (authors[0].name != "Eoin O'Brien" || authors.length > 1) && (
        <>
          By{" "}
          {authors.map((author, index) => (
            <span key={index}>
              { !!index && ", " }
              <PostAuthor author={author} />
            </span>
          ))}
        </>
      )}
    </div>
  );
}

function PostAuthor({ author }: { author: Author }) {
  return (
    <address className="inline-block not-italic">
      <a
        rel="author"
        href="/"
        className="text-black decoration-transparent hover:decoration-inherit focus:decoration-inherit"
      >
        {author?.name}
      </a>
    </address>
  );
}
