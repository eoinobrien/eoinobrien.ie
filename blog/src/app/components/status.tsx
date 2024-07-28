type Props = {
  enabled: boolean;
  children: React.ReactNode;
};

export function Status({ enabled, children }: Props) {
  return (
    <span
      className={
        "body-font align-middle rounded-md px-2 py-1 border-2 text-sm " +
        (enabled
          ? "bg-green-100 border-green-300 dark:bg-green-950 dark:border-green-900"
          : "bg-zinc-200 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700")
      }
    >
      <span
        className={
          "w-[0.7rem] h-[0.7rem] inline-block mr-2 rounded-full " +
          (enabled ? "bg-green-500" : "bg-zinc-400")
        }
      ></span>
      <span className="uppercase">{children}</span>
    </span>
  );
}
