import {observable, action} from 'mobx';
import {backCaller} from '@util/back/apis';

export interface IUserStore {
  name: string;
  avatar: string;
}
class UserStore implements IUserStore  {
  @observable name = "World";
  @observable avatar = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

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