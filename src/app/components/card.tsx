type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: Props) {
  return (
    <div
      className={
        (className ? `${className} ` : "") +
        "rounded-md bg-stone-100 dark:bg-stone-900 p-4 flex flex-col"
      }
    >
      {children}
    </div>
  );
}
