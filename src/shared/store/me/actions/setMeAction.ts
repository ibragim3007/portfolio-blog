import { MeInterface } from '../../../graphQL/@client/interface/meInterface';
import { AppDispatch } from '../../store';
import { meActions } from '../meSlice';

export const setMeAction = (me: MeInterface) => (dispath: AppDispatch) => {
  try {
    dispath(meActions.setMe(me));
  } catch (e) {
    console.log(e);
  }
};
