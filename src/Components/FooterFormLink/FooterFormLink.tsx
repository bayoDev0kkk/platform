import { Link } from "react-router-dom";
import style from "./FooterFormLink.module.scss";

interface IFooterFormLinkProps {
  linkText: string;
  to: string;
  footerText: string;
}

export const FooterFormLink: React.FC<IFooterFormLinkProps> = ({
  linkText,
  to,
  footerText,
}) => {
  return (
    <p className={style.FooterFormLink}>
      {footerText} <Link to={to}>{linkText}</Link>.
    </p>
  );
};
