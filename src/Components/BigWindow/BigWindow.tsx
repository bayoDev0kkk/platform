import style from "./BigWindow.module.scss";

interface IBigWindowProps {
  children: React.ReactNode;
}
export const BigWindow: React.FC<IBigWindowProps> = ({ children }) => {
  return <div className={style.BigWindow}>{children}</div>;
};
