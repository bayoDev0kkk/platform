import { useGetUserArticlesQuery } from "src/redux/api/api";
import { ListPage } from "../ListPage/ListPage";
import { AuthCheckWithAuth } from "src/Components/AuthChekWithAuth/AuthChekWithAuth";
import React from "react";
export const MyPostsPage: React.FC = () => (
  <AuthCheckWithAuth>
    <ListPage fetch={useGetUserArticlesQuery} />
  </AuthCheckWithAuth>
);
