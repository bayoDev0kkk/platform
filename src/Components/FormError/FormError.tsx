import style from "./FormError.module.scss";

interface IFormErrorProps {
  error?: string;
}

export const FormError: React.FC<IFormErrorProps> = ({ error }) => {
  return <p className={style.FormError}>{error}</p>;
};
