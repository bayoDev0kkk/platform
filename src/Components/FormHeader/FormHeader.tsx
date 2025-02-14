import style from "./FormHeader.module.scss";
import React from "react";

interface IFormHeaderProps {
  header: string;
}
export const FormHeader: React.FC<IFormHeaderProps> = ({ header }) => {
  return <h2 className={style.FormHeader}>{header}</h2>;
};
