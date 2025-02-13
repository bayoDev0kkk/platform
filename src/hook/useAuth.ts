import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/store";

export const useAuth = () => {
  const { token, email, username, image, bio } = useAppSelector(
    (state) => state.autorization
  );

  const [authData, setAuthData] = useState({
    token,
    email,
    username,
    image,
    bio,
    isAuth: !!token,
  });

  useEffect(() => {
    setAuthData({
      token,
      email,
      username,
      image,
      bio,
      isAuth: !!token,
    });
  }, [token, email, username, image, bio]);

  return authData;
};
