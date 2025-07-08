export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface Posts {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface IPostsMain {
  posts: Posts[];
  total: number;
  skip: number;
  limit: number;
}