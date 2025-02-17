import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import style from "./Input.module.scss";
import { FormError } from "../FormError/FormError";
import React from "react";

interface IInputProps {
  type: string;
  placeholder: string;
  header: string;
  name: string;
  serverError?: string | null;
  autocomplete?: string;
  register: UseFormRegister<FieldValues>;
  options?: RegisterOptions<FieldValues, string> | undefined;
  error: FieldErrors<FieldValues>;
}

export const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  header,
  register,
  options,
  error,
  name,
  autocomplete,
  serverError,
}) => {
  // console.log(error);
  return (
    <label className={style.Input}>
      <p>{header}</p>
      <input
        className={error[name] || serverError ? style.error : ""}
        autoComplete={autocomplete}
        type={type}
        placeholder={placeholder}
        {...register(`${name}`, options)}
      />
      {error[name] && <FormError error={error[name].message as string} />}
      {serverError && <FormError error={serverError} />}
    </label>
  );
};
