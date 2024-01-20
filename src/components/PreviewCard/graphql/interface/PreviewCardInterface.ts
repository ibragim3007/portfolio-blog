import { PostResponseInterface } from '../../../../GraphQL/@post/interfaces/PostResponseInterface';

export type PreviewCardInterface = Omit<PostResponseInterface, 'article'>;
