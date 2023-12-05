import { MeInterface } from '../../@client/interfaces/meInterface';

export interface PostResponseInterface {
  id: string;
  title: string;
  article: string;
  createDate: Date;
  author: MeInterface;
  authorId: string;
  likedBy: { userId: string }[];
}
