import { PostResponseInterface } from '../../../../shared/graphQL/@post/interface/PostResponseInterface';

export type PreviewCardInterface = Omit<PostResponseInterface, 'article'>;
