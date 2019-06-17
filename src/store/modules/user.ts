import {observable, flow} from 'mobx';
import {backCaller} from '@util/back/apis';

export interface IUserStore {
  name: string;
  avatar: string;
}
class UserStore implements IUserStore  {
  @observable name = "World";
  @observable avatar = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

  fetchUser = flow(function * (this: UserStore) {
    try {
      const res = yield backCaller('/user/get', {});
      this.name = res.data.name;
      this.avatar = res.data.avatar;
      console.log(res);
      console.log(this)
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