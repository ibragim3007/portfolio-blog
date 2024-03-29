import { MeInterface } from '../../@client/interface/meInterface';
import { IComment } from '../../@comment/interface/CommentInterface';

export interface PostResponseInterface {
  id: string;
  title: string;
  article: string;
  createDate: Date;
  author: MeInterface;
  authorId: string;
  likedBy: { userId: string }[];
  comments: IComment[];
  likesAmount: number;
  commentsAmount: number;
}
