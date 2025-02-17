import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ArticlesDTO,
  ArticleDTO,
  LoginUserDTO,
  CreateUserErrorDTO,
  LoginUserErrorDTO,
  IUserLogin,
  IPost,
  IUpdatePost,
} from "./apiTypes";
import { FieldValues } from "react-hook-form";
import {
  getLocalStorageToken,
  getLocalStorageUsername,
} from "src/LocalStorage/localStorage";

const BASE_URL = "https://blog-platform.kata.academy/api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getArticles: builder.query<ArticlesDTO, number>({
      query: (offset) => ({
        url: "articles?limit=5&offset=" + offset,
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
      }),
      keepUnusedDataFor: 0,
    }),
    getArticle: builder.query<ArticleDTO, string>({
      query: (slug) => ({
        url: "articles/" + slug,
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
      }),
      keepUnusedDataFor: 0,
    }),
    createUser: builder.mutation<IUserLogin, FieldValues>({
      query: (userInfo) => ({
        url: "users",
        method: "POST",
        body: { user: userInfo },
      }),
      transformResponse: (response: LoginUserDTO) => response.user,
      transformErrorResponse: (response) => {
        if (response.status === 422) {
          const err = response.data as CreateUserErrorDTO;
          return err.errors;
        }
      },
    }),
    loginUser: builder.mutation<IUserLogin, FieldValues>({
      query: (userInfo) => ({
        url: "users/login",
        method: "POST",
        body: { user: userInfo },
      }),
      transformResponse: (response: LoginUserDTO) => response.user,
      transformErrorResponse: (response) => {
        if (response.status === 422) {
          const err = response.data as LoginUserErrorDTO;
          return err.errors;
        }
      },
    }),
    getCurrentUser: builder.query<IUserLogin, void>({
      query: () => ({
        url: "user",
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
      }),
      transformResponse: (response: LoginUserDTO) => response.user,
    }),
    updateCurrentUser: builder.mutation<IUserLogin, FieldValues>({
      query: (userInfo) => ({
        url: "user",
        method: "PUT",
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
        body: { user: { ...userInfo } },
      }),
      transformResponse: (response: LoginUserDTO) => response.user,
    }),
    getUserArticles: builder.query<ArticlesDTO, number>({
      query: (offset) =>
          "articles?limit=5&offset=" +
          offset +
          "&author=" +
          getLocalStorageUsername(),
      keepUnusedDataFor: 0,
    }),
    addPost: builder.mutation<ArticleDTO, IPost>({
      query: (post) => ({
        url: "articles",
        method: "POST",
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
        body: { article: post },
      }),
    }),
    updatePost: builder.mutation<ArticleDTO, IUpdatePost>({
      query: (post) => ({
        url: "articles/" + post.slug,
        method: "PUT",
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
        body: { article: post.article },
      }),
    }),
    deletePost: builder.mutation<ArticleDTO, string>({
      query: (slug) => ({
        url: "articles/" + slug,
        method: "DELETE",
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
      }),
    }),
    setLike: builder.mutation<ArticleDTO, string>({
      query: (slug) => ({
        url: "articles/" + slug + "/favorite",
        method: "POST",
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
      }),
    }),
    deleteLike: builder.mutation<ArticleDTO, string>({
      query: (slug) => ({
        url: "articles/" + slug + "/favorite",
        method: "DELETE",
        headers: { Authorization: `Token ${getLocalStorageToken()}` },
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
  useGetUserArticlesQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useSetLikeMutation,
  useDeleteLikeMutation,
} = api;

export type IApiHook =
    | typeof useCreateUserMutation
    | typeof useLoginUserMutation
    | typeof useUpdateCurrentUserMutation;

export type IApiListsHook =
    | typeof useGetArticlesQuery
    | typeof useGetUserArticlesQuery;