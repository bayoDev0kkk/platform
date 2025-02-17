import style from "./PostPage.module.scss";
import { PostItem } from "src/Components/PostItem/PostItem";
import { useGetArticleQuery } from "src/redux/api/api";
import { useParams } from "react-router-dom";
import { Alert, Spin } from "antd/es";
import Markdown from "markdown-to-jsx";
import React from "react";
export const PostPage: React.FC = () => {
  const { slug } = useParams();
  const { data, isError, isLoading } = useGetArticleQuery(slug!);
  if (isError) {
    return (
      <Alert
        message="something went wrong! This message from Post Page"
        type="error"
      />
    );
  }
  if (isLoading) {
    return <Spin spinning={isLoading} size="large" />;
  }

  return (
    <div className={style.PostPage}>
      <PostItem article={data!.article} />
      <div className={style.PostBody}>
        <Markdown>{data!.article.body}</Markdown>
      </div>
    </div>
  );
};
