import { useAuth } from "src/hook/useAuth";
import { Navigate } from "react-router-dom";
import React from "react";
interface IAuthCheckProps {
  children: React.ReactNode;
}

export const AuthCheckWithAuth: React.FC<IAuthCheckProps> = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? <>{children}</> : <Navigate to="/articles" replace />;
};
