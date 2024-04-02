import { OtherUserInterface } from '../../@client/interface/otherUserInterface';
import { PostResponseInterface } from '../../@post/interface/PostResponseInterface';

export interface IComment {
  id: string;
  text: string;
  user: OtherUserInterface;
  userId: string;
  post: PostResponseInterface;
  postId: string;
  likesAmount: number;
  likedBy: { userId: string }[];
  createDate: Date;
}

export interface IAddComment {
  text: string;
  postId: string;
}
