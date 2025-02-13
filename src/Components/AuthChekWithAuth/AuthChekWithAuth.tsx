import { useAuth } from "../../hook/useAuth";
import { Navigate } from "react-router-dom";

interface IAuthCheckProps {
  children: React.ReactNode;
}

export const AuthCheckWithAuth: React.FC<IAuthCheckProps> = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? <>{children}</> : <Navigate to="/" replace />;
};
