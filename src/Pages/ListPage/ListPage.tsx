import { useGetArticlesQuery } from "../../redux/api/api";
import { Spin, Alert, Pagination, Empty } from "antd/es";
import React from "react";
import { PostItem } from "../../Components/PostItem/PostItem";
import style from "./ListPage.module.scss";
import { getOffset } from "./func";
import { useState } from "react";
import { IApiListsHook } from "../../redux/api/api";

interface IListPageProps {
  fetch?: IApiListsHook;
}

export const ListPage: React.FC<IListPageProps> = ({
  fetch = useGetArticlesQuery,
}) => {
  const [offset, setOffset] = useState(0);

  const { data, isFetching, isError } = fetch(offset);

  if (isError) {
    return (
      <Alert
        message="ПРОИЗОШЛА ОГРОМНАЯ ОШИБКА, ПЕРЕУСТАНОВИТЕ ВИНДУ"
        type="error"
        className={style.Alert}
      />
    );
  }
  console.log(data);
  return (
    <Spin spinning={isFetching} className={style.Alert} size="large">
      <ul className={style.ListPage}>
        {data?.articles.map((article) => {
          return (
            <li
              key={article.createdAt + article.slug}
              className={style.container}
            >
              <PostItem article={article} />
            </li>
          );
        })}
      </ul>
      <Pagination
        align="center"
        pageSize={5}
        total={data?.articlesCount}
        showSizeChanger={false}
        className={style.pagination}
        hideOnSinglePage
        onChange={(page) => {
          setOffset(getOffset(page));
        }}
      />
      {data?.articles.length === 0 && <Empty className={style.Empty} />}
    </Spin>
  );
};
