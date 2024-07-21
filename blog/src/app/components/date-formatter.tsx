import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
  includeDay?: boolean;
};

const DateFormatter = ({ dateString, includeDay = true }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, `${includeDay ? 'EEEE, ' : ''}LLLL d, yyyy`)}</time>;
};

export default DateFormatter;