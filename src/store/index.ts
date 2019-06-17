import UserStore from './modules/user';
import ConstStroe from './modules/const';

export const RootStore = {
  mobxStore: new UserStore(),
  ConstStroe: new ConstStroe()
}