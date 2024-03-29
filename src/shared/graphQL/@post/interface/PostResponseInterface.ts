import { MeInterface } from '../../@client/interface/meInterface';

export interface PostResponseInterface {
  id: string;
  title: string;
  article: string;
  createDate: Date;
  author: MeInterface;
  authorId: string;
  likedBy: { userId: string }[];
}
