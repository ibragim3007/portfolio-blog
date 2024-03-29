import { PostResponseInterface } from '../../@post/interface/PostResponseInterface';

export interface OtherUserInterface {
  id: string;
  firstName: string;
  lastName: string;
  lastOnline: Date;
  writtenPosts: PostResponseInterface[];
}
