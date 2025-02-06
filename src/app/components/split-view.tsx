type Props = {
  left: React.ReactNode;
  right?: React.ReactNode;
  wrapReversed?: boolean;
};

export function SplitView({ left, right, wrapReversed = false }: Props) {
  return (
    <div>
      <div
        className={`flex w-full max-w-5xl mx-auto ${
          wrapReversed ? "flex-wrap-reverse" : "flex-wrap"
        }`}
      >
        <div className="flex-1 w-full md:w-2/3">{left}</div>
        <div className="w-full md:w-1/3">{right}</div>
      </div>
    </div>
  );
}
