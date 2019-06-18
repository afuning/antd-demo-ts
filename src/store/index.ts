import UserStore from './modules/user';
import ConstStroe from './modules/const';
import { RouterStore } from 'mobx-react-router';

const RootStore = {
  userStore: new UserStore(),
  constStroe: new ConstStroe(),
  routerStore: new RouterStore()
}
export {
  RootStore,
  UserStore,
  ConstStroe,
  RouterStore
};