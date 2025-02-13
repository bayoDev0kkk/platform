import { FieldValues } from "react-hook-form";
import { IUserCreateError } from "../../redux/api/apiTypes";

export const getFetchParam = (data: FieldValues): FieldValues => {
  const { username, email, password } = data;
  return { username, email, password };
};

export const getUsernameError = (error: unknown) => {
  if (error !== null) {
    return (error as IUserCreateError).username!;
  }
  return null;
};
export const getPasswordError = (error: unknown) => {
  if (error !== null) {
    return (error as IUserCreateError).password!;
  }
  return null;
};
export const getEmailError = (error: unknown) => {
  if (error !== null) {
    return (error as IUserCreateError).email!;
  }
  return null;
};
