import { Alert, Avatar, Popconfirm, Spin } from "antd";
import { IArticle } from "../../redux/api/apiTypes";
import style from "./PostItem.module.scss";
import { formatedDate } from "../../Components/PostItem/func";
import { TagItem } from "../TagItem/TagItem";
import { Like } from "../Like/Like";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { useDeletePostMutation } from "../../redux/api/api";
import { useEffect } from "react";

interface IPostItemProps {
  article: IArticle;
}

export const PostItem: React.FC<IPostItemProps> = ({ article }) => {
  const {
    title,
    author,
    updatedAt,
    favoritesCount,
    tagList,
    description,
    favorited,
    slug,
  } = article;
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const { slug: paramSlug } = useParams();
  const [deletePost, { isLoading, isSuccess, isError }] =
    useDeletePostMutation();
  useEffect(() => {
    if (isSuccess) {
      navigate("/articles");
    }
  }, [isSuccess, navigate]);
  const handleClick = () => {
    navigate(`/articles/${paramSlug}/edit`, { state: article });
  };
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.heading}>
          <h5 className={style.title}>
            <Link to={`/articles/${slug}`}>{title}</Link>
          </h5>
          <Like likeCount={favoritesCount} like={favorited} slug={slug} />
        </div>
        <ul className={style.tags}>
          {tagList.map((tag, index) => (
            <TagItem tag={tag} key={index + tag} />
          ))}
        </ul>
        <p className={style.description}>{description}</p>
      </div>
      <div>
        <div className={style.user}>
          <div>
            <p>{author.username}</p>
            <p className={style.date}>{formatedDate(updatedAt)}</p>
          </div>
          <Avatar size={46} src={author.image} />
        </div>
        {paramSlug &&
          isAuth &&
          author.username === localStorage.getItem("username") && (
            <div className={style.buttons}>
              <Popconfirm
                okText="Yes"
                cancelText="No"
                title="Delete post"
                placement="rightTop"
                onConfirm={() => {
                  deletePost(paramSlug);
                }}
              >
                <button className={style.delete}>Delete</button>
              </Popconfirm>
              <button className={style.edit} onClick={handleClick}>
                Edit
              </button>
            </div>
          )}
        {isError && <Alert message="Error" type="error" />}
        {isLoading && <Spin spinning={isLoading} size="large" fullscreen />}
      </div>
    </div>
  );
};
