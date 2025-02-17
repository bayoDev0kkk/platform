import { useAuth } from "src/hook/useAuth";
import { Navigate } from "react-router-dom";
import React from "react";
interface IAuthCheckProps {
  children: React.ReactNode;
}

export const AuthCheck: React.FC<IAuthCheckProps> = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to="/" replace /> : <>{children}</>;
};
