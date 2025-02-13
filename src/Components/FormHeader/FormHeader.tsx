import style from "./FormHeader.module.scss";

interface IFormHeaderProps {
  header: string;
}
export const FormHeader: React.FC<IFormHeaderProps> = ({ header }) => {
  return <h2 className={style.FormHeader}>{header}</h2>;
};
