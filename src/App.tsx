import { Outlet } from "react-router-dom";
import "./App.scss";
import React from "react";
import { Header } from "./Components/Header/Header";
import { Layout } from "antd/es";
import { useGetCurrentUserQuery } from "./redux/api/api";
import { Spin } from "antd/es";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import { setAutarization } from "./redux/slice/AuthorizationSlice/Authorization";
import {
  saveLocalStorageToken,
  saveLocalStorageUsername,
} from "./LocalStorage/localStorage";

const App: React.FC = () => {
  const { data, isLoading } = useGetCurrentUserQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      saveLocalStorageToken(data.token);
      saveLocalStorageUsername(data.username);
      dispatch(setAutarization(data));
    }
  }, [data, dispatch]);
  return (
      <Spin spinning={isLoading} size="large">
        <Layout>
          <Header />
          <Outlet />
        </Layout>
      </Spin>
  );
};

export default App;