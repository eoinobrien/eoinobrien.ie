type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: Props) {
  return (
    <div
      className={
        (className ? `${className} ` : "") +
        "p-4 flex flex-col"
      }
    >
      {children}
    </div>
  );
}
