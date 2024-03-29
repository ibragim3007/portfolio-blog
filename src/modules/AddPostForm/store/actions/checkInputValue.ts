import { WrapperForFieldValue } from '../../../../shared/interfaces/globalInterface';
import { AppDispatch, RootState } from '../../../../shared/store/store';
import { addPostActions } from '../addPostSlice';

import { AddPostInterface } from '../interface/AddPostFormInterface';

export const checkInputValue =
  (id: string, message?: string, force?: boolean) => (dispath: AppDispatch, getState: () => RootState) => {
    const fields = getState().addPostReducer.fields;

    if (fields[id as keyof WrapperForFieldValue<AddPostInterface>].value === '' || force) {
      const updatedFields = {
        ...fields,
        [id]: {
          ...fields[id as keyof WrapperForFieldValue<AddPostInterface>],
          error: {
            status: true,
            message: message || 'Reqired field',
          },
        },
      };
      dispath(addPostActions.changeValue(updatedFields));
    } else {
      const updatedFields = {
        ...fields,
        [id]: {
          ...fields[id as keyof WrapperForFieldValue<AddPostInterface>],
          error: {
            status: false,
            message: '',
          },
        },
      };
      dispath(addPostActions.changeValue(updatedFields));
    }
  };
