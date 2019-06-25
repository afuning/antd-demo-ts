import {observable, flow} from 'mobx';
import {backCaller} from '@util/index';

export interface IUserStore {
  name: string;
  avatar: string;
  level: number;
  isVerify: boolean;
}
class UserStore implements IUserStore  {
  @observable name = "World";
  @observable level = 0;
  @observable avatar = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
  @observable isVerify = false;

  fetchUser = flow(function * (this: UserStore) {
    try {
      const res = yield backCaller('/user/get', {});
      this.name = res.data.name;
      this.avatar = res.data.avatar;
      this.level = res.data.level;
      this.isVerify = res.data.isVerify;
    } catch (error) {
      console.log(error);
    }
  })

  // @action.bound
  // async fetchUser () {
  //   try {
  //     const res = await backCaller('/user/get', {});
  //     this.name = res.data.name;
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

export default UserStore;