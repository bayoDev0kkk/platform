import { AuthCheckWithAuth } from "../../Components/AuthChekWithAuth/AuthChekWithAuth";
import { SubmitHandler } from "react-hook-form";
import { IPost } from "../../redux/api/apiTypes";
import { useAddPostMutation } from "../../redux/api/api";
import { Article, IPostForm } from "../../Components/Article/Article";

const defaultValues: IPostForm = {
  title: "",
  description: "",
  body: "",
  tagList: [{ tag: "" }],
};

export const NewArticle = () => {
  const [fetch, { isSuccess, isError, isLoading }] = useAddPostMutation();
  const onSubmitDefault: SubmitHandler<IPostForm> = (data) => {
    const post: IPost = { ...data, tagList: data.tagList.map((el) => el.tag) };
    fetch(post);
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
