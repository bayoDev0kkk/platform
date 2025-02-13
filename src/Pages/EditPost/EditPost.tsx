import { AuthCheckWithAuth } from "../../Components/AuthChekWithAuth/AuthChekWithAuth";
import { SubmitHandler } from "react-hook-form";
import { IPost } from "../../redux/api/apiTypes";
import { useUpdatePostMutation } from "../../redux/api/api";
import { Article, IPostForm } from "../../Components/Article/Article";
import { useLocation } from "react-router-dom";
import { IArticle } from "../../redux/api/apiTypes";

export const EditPost = () => {
  const { state } = useLocation();
  const article = state as IArticle;
  const [fetch, { isSuccess, isError, isLoading }] = useUpdatePostMutation();

  const defaultValues: IPostForm = {
    title: article.title,
    description: article.description,
    body: article.body,
    tagList: article.tagList.map((el) => ({ tag: el })),
  };

  const onSubmitDefault: SubmitHandler<IPostForm> = (data) => {
    const post: IPost = { ...data, tagList: data.tagList.map((el) => el.tag) };
    fetch({ article: post, slug: article.slug });
  };

  return (
    <AuthCheckWithAuth>
      <Article
        onSubmit={onSubmitDefault}
        isSuccess={isSuccess}
        isError={isError}
        isLoading={isLoading}
        defaultVal={defaultValues}
      />
    </AuthCheckWithAuth>
  );
};
