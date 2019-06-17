import {observable, action, computed} from 'mobx';
import {backCaller} from '@util/back/apis';

export interface IUserStore {
  name: string;
}
class UserStore implements IUserStore  {
  @observable name = "World";

  @action.bound
  async fetchUser () {
    try {
      const res = await backCaller('/user/get', {});
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserStore;