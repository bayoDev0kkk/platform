import { FieldValues } from "react-hook-form";

export const getFetchParam = (data: FieldValues): FieldValues => {
  const newData: FieldValues = {};

  if ("email" in data) newData.email = data.email;
  if ("password" in data) newData.password = data.password;
  if ("username" in data) newData.username = data.username;
  if ("image" in data) newData.image = data.image;

  return newData;
};
