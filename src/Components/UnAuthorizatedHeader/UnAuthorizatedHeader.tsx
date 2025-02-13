import { NavLink, NavLinkRenderProps } from "react-router-dom";
import style from "./UnAuthorizatedHeader.module.scss";
const setActive = ({ isActive }: NavLinkRenderProps) =>
  isActive ? style.active + " " + style.link : style.link;

export const UnAutorizatedHeader: React.FC = () => {
  return (
    <>
      <NavLink to={"/sign-in"} className={setActive}>
        Sign In
      </NavLink>
      <NavLink to={"/sign-up"} className={setActive}>
        Sign Up
      </NavLink>
    </>
  );
};
