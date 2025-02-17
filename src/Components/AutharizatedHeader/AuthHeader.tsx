import { Avatar } from "antd/es";
import { useAuth } from "src/hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import style from "./AuthHeader.module.scss";
import { removeAutarization } from "src/redux/slice/AuthorizationSlice/Authorization";
import { useAppDispatch } from "src/redux/store";
import React from "react";
import {
    removeLocalStorageToken,
    removeLocalStorageUsername,
} from "src/LocalStorage/localStorage";

export const AuthHeader: React.FC = () => {
    const { image, username } = useAuth();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const setLogOut = () => {
        removeLocalStorageToken();
        removeLocalStorageUsername();
        dispatch(removeAutarization());
        navigate("/articles");
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