import { Avatar } from "antd/es";
import { useAuth } from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import style from "./AuthHeader.module.scss";
import { removeAutarization } from "../../redux/slice/AuthorizationSlice/Authorization";
import { useAppDispatch } from "../../redux/store";
import React from "react";
export const AuthHeader: React.FC = () => {
  const { image, username } = useAuth();
  const naivigate = useNavigate();
  const dispatch = useAppDispatch();
  const setLogOut = () => {
    dispatch(removeAutarization());
    naivigate("/");
  };
  return (
    <div className={style.AuthHeader}>
      <Link to="/my-posts" className={style.logout + " " + style.posts}>
        My posts
      </Link>
      <Link to="/new-article" className={style.article}>
        Create article
      </Link>
      <Link to="/profile" className={style.user}>
        <span className={style.userName}>{username}</span>
        <Avatar size={46} src={image} />
      </Link>
      <button onClick={() => setLogOut()} className={style.logout}>
        Log Out
      </button>
    </div>
  );
};
