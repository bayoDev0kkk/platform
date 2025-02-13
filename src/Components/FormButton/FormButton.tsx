import style from "./FormButton.module.scss";

interface IFormButtonProps {
  buttonText: string;
}

export const FormButton: React.FC<IFormButtonProps> = ({ buttonText }) => {
  return (
    <button type="submit" className={style.FormButton}>
      {buttonText}
    </button>
  );
};
