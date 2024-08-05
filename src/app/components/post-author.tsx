import { Author } from "@/interfaces/author";

export function PostAuthors({ authors }: { authors?: Author[] }) {
  return (
    <>
      {authors && (authors[0].name != "Eoin O'Brien" || authors.length > 1) && (
        <span>
          By{" "}
          {authors.map((author, index) => (
            <span key={index}>
              {index !== 0 && index !== authors.length - 1 && ", "}
              {index === authors.length - 1 && index !== 0 && " & "}
              <PostAuthor author={author} />
            </span>
          ))}
        </span>
      )}
    </>
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
