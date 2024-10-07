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
          : "text-stone-600 border-stone-400 dark:text-stone-400 dark:border-stone-400")
      }
    >
      <span
        className={
          "w-[0.8rem] h-[0.8rem] inline-block mr-1 rounded-full " +
          (enabled ? "bg-green-700 dark:bg-green-500" : "bg-stone-600 dark:bg-stone-400")
        }
      ></span>
      <span className="uppercase inline-block leading-[0.87]">{children}</span>
    </div>
  );
}
