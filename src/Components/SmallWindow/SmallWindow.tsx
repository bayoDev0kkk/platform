import React from "react";
import style from "./SmallWidow.module.scss";

interface ISmallWindowProps {
  children: React.ReactNode;
}

export const SmallWindow: React.FC<ISmallWindowProps> = ({ children }) => {
  return <div className={style.SmallWindow}>{children}</div>;
};
