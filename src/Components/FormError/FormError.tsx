import style from "./FormError.module.scss";
import React from "react";
interface IFormErrorProps {
  error?: string;
}

export const FormError: React.FC<IFormErrorProps> = ({ error }) => {
  return <p className={style.FormError}>{error}</p>;
};
