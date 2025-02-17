import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import style from "./Like.module.scss";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";
import React from "react";
import { useAuth } from "src/hook/useAuth";
import { useSetLikeMutation, useDeleteLikeMutation } from "src/redux/api/api";

interface ILikeProps {
  like: boolean;
  likeCount: number;
  slug: string;
}

export const Like: React.FC<ILikeProps> = ({
  like: favorited,
  likeCount,
  slug,
}) => {
  const [like, setLike] = useState(favorited);
  const [likeCounts, setLikeCounts] = useState(likeCount);
  const { isAuth } = useAuth();
  const [setLikeMutation] = useSetLikeMutation();
  const [deleteLikeMutation] = useDeleteLikeMutation();

  const handleLike = (e: CheckboxChangeEvent) => {
    setLike(e.target.checked);
    setLikeCounts(e.target.checked ? likeCounts + 1 : likeCounts - 1);
    if (like) deleteLikeMutation(slug);
    if (!like) setLikeMutation(slug);
  };

  return (
    <Checkbox
      checked={like}
      className={style.Like}
      onChange={handleLike}
      disabled={!isAuth}
    >
      {like ? (
        <HeartFilled className={style.heart + "  " + style.heartRed} />
      ) : (
        <HeartOutlined className={style.heart} />
      )}
      {likeCounts}
    </Checkbox>
  );
};
