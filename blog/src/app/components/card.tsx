type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: Props) {
  return (
    <div
      className={
        className +
        " " +
        "rounded-md bg-zinc-100 dark:bg-zinc-900 p-4"
      }
    >
      {children}
    </div>
  );
}
