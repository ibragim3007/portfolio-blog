import { WrapperForFieldValue } from '../../../interfaces/globalInterface';
import { AddPostInterface } from './interface/AddPostFormInterface';

export const defaultAddPostFields: WrapperForFieldValue<AddPostInterface> = {
  title: {
    id: 'title',
    value: '',
    label: 'Title',
  },
  article: {
    id: 'article',
    value: '',
    label: 'Article',
  },
};
