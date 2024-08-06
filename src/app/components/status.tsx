type Props = {
  enabled: boolean;
  children: React.ReactNode;
};

export function Status({ enabled, children }: Props) {
  return (
    <div
      className={
        "body-font rounded-md px-2 py-1 border-2 text-xs inline-flex items-end " +
        (enabled
          ? "text-green-700 border-green-600 dark:text-green-500 dark:border-green-500"
          : "text-zinc-600 border-zinc-400 dark:text-zinc-400 dark:border-zinc-400")
      }
    >
      <span
        className={
          "w-[0.8rem] h-[0.8rem] inline-block mr-1 rounded-full " +
          (enabled ? "bg-green-700 dark:bg-green-500" : "bg-zinc-600 dark:bg-zinc-400")
        }
      ></span>
      <span className="uppercase inline-block leading-[0.87]">{children}</span>
    </div>
  );
}
