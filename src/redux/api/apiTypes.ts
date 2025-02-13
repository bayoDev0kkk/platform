interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IAuthor;
}
export interface ArticleDTO {
  article: IArticle;
}
export interface ArticlesDTO {
  articles: IArticle[];
  articlesCount: number;
}
export interface IUserLogin {
  email: string;
  username: string;
  token: string;
  bio: string | null;
  image: string | null;
}
export interface LoginUserDTO {
  user: IUserLogin;
}

export type IUserCreateError = {
  email?: string;
  username?: string;
  password?: string;
};
export type CreateUserErrorDTO = {
  errors: IUserCreateError;
};

export type LoginUserErrorDTO = {
  errors: string;
};

export interface IPost {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface IAddPost {
  article: IPost;
}

export interface IUpdatePost {
  article: IPost;
  slug: string;
}
