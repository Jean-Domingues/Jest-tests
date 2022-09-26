import { CommentType } from './CommentType';

export type PostType = {
  userName: string;
  title: string;
  likes: number;
  comments: CommentType[];
  deleted?: boolean;
  postId?: number;
};
