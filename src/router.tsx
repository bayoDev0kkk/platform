import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import { ListPage } from "./Pages/ListPage/ListPage";
import App from "./App";
import { PostPage } from "./Pages/PostInfo/PostPage";
import { SignUpPage } from "./Pages/SignUpPage/SignUp";
import { SignInPage } from "./Pages/SignInPage/SignIn";
import { ProfilePage } from "./Pages/ProfilePage/Profile";
import { MyPostsPage } from "./Pages/MyPostsPage/MyPostsPage";
import { NewArticle } from "./Pages/NewArticle/NewArticle";
import { EditPost } from "./Pages/EditPost/EditPost";

const routes:RouteObject[] = [
  { path: "/", element: <Navigate to="/articles" replace /> },
  { path: "/articles", element: <ListPage /> },
  { path: "/articles/:slug", element: <PostPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/my-posts", element: <MyPostsPage /> },
  { path: "/new-article", element: <NewArticle /> },
  { path: "articles/:slug/edit", element: <EditPost /> },
];

export const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children: routes,
  },
  { path: "*", element: <ListPage /> },
]
);

