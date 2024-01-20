import { PostResponseInterface } from '../../@post/interfaces/PostResponseInterface';

export interface OtherUserInterface {
  id: string;
  firstName: string;
  lastName: string;
  lastOnline: Date;
  writtenPosts: PostResponseInterface[];
}
