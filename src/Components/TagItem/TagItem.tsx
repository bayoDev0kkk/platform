import React from "react";
import style from "./TagItem.module.scss";

interface ITagItemProps {
  tag: string;
}

export const TagItem: React.FC<ITagItemProps> = ({ tag }) => {
  if (tag === "") {
    return null;
  }
  return <li className={style.TagItem}>{tag}</li>;
};
