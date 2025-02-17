import { Header as HeaderANTD } from "antd/es/layout/layout";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { UnAutorizatedHeader } from "../UnAuthorizatedHeader/UnAuthorizatedHeader";
import { useAuth } from "src/hook/useAuth";
import { AuthHeader } from "../AutharizatedHeader/AuthHeader";
import React from "react";

export const Header: React.FC = () => {
  const { isAuth } = useAuth();
  return (
    <HeaderANTD className={style.Head}>
      <div className={style.Header}>
        <h6>
          <NavLink to="/articles">Realworld Blog</NavLink>
        </h6>
        <div>{isAuth ? <AuthHeader /> : <UnAutorizatedHeader />}</div>
      </div>
    </HeaderANTD>
  );
};
