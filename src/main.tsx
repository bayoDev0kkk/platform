import { createRoot } from "react-dom/client";
import "./index.scss";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { theme } from "./Theme/Theme.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </Provider>
);
