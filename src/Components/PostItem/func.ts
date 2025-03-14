import { format } from "date-fns";

export const formattedDate = (date: string) => {
  return format(new Date(date), "MMMM d, yyyy");
};
