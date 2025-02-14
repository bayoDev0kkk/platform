import { Divider } from "antd/es";
import React from "react";
import style from "./FormAccept.module.scss";
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { FormError } from "../FormError/FormError";

interface IFormAcceptProps {
  register: UseFormRegister<FieldValues>;
  options?: RegisterOptions<FieldValues, "accept">;
  error: FieldErrors<FieldValues>;
}
export const FormAccept: React.FC<IFormAcceptProps> = ({
  register,
  options,
  error,
}) => {
  return (
    <>
      <Divider className={style.divider} />
      <label className={style.FormAccept}>
        <input type="checkbox" {...register("accept", options)} />
        <span>I agree to the processing of my personal information</span>
      </label>
      {error["accept"] && (
        <FormError error={error["accept"].message as string} />
      )}
    </>
  );
};
