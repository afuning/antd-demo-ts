import React from 'react';
import { inject, observer } from "mobx-react";
import {UserStore} from '@store/index';
import style from './style.module.less';
import { Layout, Avatar, Row, Col, Popover, Icon } from 'antd';

const initialState = {};
type State = Readonly<typeof initialState>;

interface PropsType {
  title?: string,
}
interface InjectedProps extends PropsType {
  userStore: UserStore;
}

@inject("userStore")
@observer
class BasicHeader extends React.Component<PropsType> {
  readonly state: State = initialState;

  get injected() {
    return this.props as InjectedProps;
  }

  async componentDidMount () {
    await this.injected.userStore.fetchUser();
  }

  render () {
    const {userStore} = this.injected
    return (
      <Layout.Header className={style['my-header']}>
        <Row type="flex" justify="end" align="middle">
          <Col style={{paddingRight: '24px'}}>
            <Popover content={<UserMenu />}>
              <div className={style['my-header__user']}>
                <Avatar src={userStore.avatar} />
                <span className={style['my-header__name']}>{userStore.name}</span>
                <Icon type="caret-down" />
              </div>
            </Popover>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}

const UserMenu: React.FC = () => {
  return (
    <div>
      <div>member</div>
    </div>
  );
};

export default BasicHeader;