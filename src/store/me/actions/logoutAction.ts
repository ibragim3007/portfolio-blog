import { TOKEN_STRING } from '../../../constants/LocalStorageStrings';
import { AppDispatch } from '../../store';
import { meActions } from '../meSlice';

export const logoutAction = () => (dispath: AppDispatch) => {
  try {
    localStorage.removeItem(TOKEN_STRING);
    dispath(meActions.setMe(null));
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};
