import UserStore from './modules/user';
import ConstStroe from './modules/const';

const RootStore = {
  userStore: new UserStore(),
  ConstStroe: new ConstStroe()
}
export {
  RootStore,
  UserStore,
  ConstStroe
};