import style from "./PostPage.module.scss";
import { PostItem } from "../../Components/PostItem/PostItem";
import { useGetArticleQuery } from "../../redux/api/api";
import { useParams } from "react-router-dom";
import { Alert, Spin } from "antd";
import Markdown from "markdown-to-jsx";

export const PostPage: React.FC = () => {
  const { slug } = useParams();
  const { data, isError, isLoading } = useGetArticleQuery(slug!);
  if (isError) {
    return (
      <Alert
        message="ПРОИЗОШЛА ОГРОМНАЯ ОШИБКА, ПЕРЕУСТАНОВИТЕ ВИНДУ"
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
