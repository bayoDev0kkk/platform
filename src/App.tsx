import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./Components/Header/Header";
import Layout from "antd/es/layout";
import { useGetCurrentUserQuery } from "./redux/api/api";
import  Spin  from "antd/es/spin";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import { setAutarization } from "./redux/slice/AuthorizationSlice/Authorization";
import React from "react";

const App: React.FC = () => {
  const { data, isLoading } = useGetCurrentUserQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
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
