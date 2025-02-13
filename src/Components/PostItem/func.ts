import { format } from "date-fns";

export const formatedDate = (date: string) => {
  return format(new Date(date), "MMMM d, yyyy");
};
