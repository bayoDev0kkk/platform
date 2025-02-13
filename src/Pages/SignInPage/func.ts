import { FieldValues } from "react-hook-form";

export const getFetchParam = (data: FieldValues): FieldValues => {
  const { email, password } = data;
  return { email, password };
};

export const getLoginError = (error: unknown) => {
  if (error !== null) {
    return "Invalid email or password";
  }
  return null;
};
