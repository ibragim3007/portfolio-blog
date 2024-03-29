import { IComment } from '../../@comment/interface/CommentInterface';
import { PostResponseInterface } from '../../@post/interface/PostResponseInterface';
import { Role } from './meInterface';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  createDate: Date;
  lastOnline: Date;
  writtenPosts: PostResponseInterface;
  likedPosts: { postId: string };
  likedComments: { commentId: string };
  comments: IComment;
}
