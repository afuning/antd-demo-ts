import React from 'react';
import BaseRouters from '@/router/index';
import BasicMenu from './BasicMenu';
import BasicBread from './BasicBread';
import BasicHeader from './BasicHeader';
import { inject, observer } from "mobx-react";
import {UserStore} from '@store/index';
import { Layout, BackTop } from 'antd';
const { Content, Sider } = Layout;

const initialState = { collapsed: false };
type State = Readonly<typeof initialState>;
type PropsType = {}

interface InjectedProps extends PropsType {
  userStore: UserStore;
}

@inject("userStore")
@observer
class BasicLayout extends React.Component <PropsType, State> {
  readonly state: State = initialState;

  get injected() {
    return this.props as InjectedProps;
  }

  private onCollapse = () => this.setState(handleCollapse);

  async componentDidMount () {
    await this.injected.userStore.fetchUser();
  }

  render () {
    const { collapsed } = this.state;
    return (
      <Layout>
        <BasicHeader />
        <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={this.onCollapse}
            theme="light"
          >
            <BasicMenu title="11111" />
          </Sider>
          <Layout style={{ padding: '0 12px 12px' }}>
            <BasicBread />
            <Content
              style={{
                background: '#fff',
                margin: 0,
              }}
            >
              <BaseRouters />
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
          </Layout>
        </Layout>
        <BackTop />
      </Layout>
    );
  }
}
const handleCollapse = (prevState: State) => ({
  collapsed: !prevState.collapsed,
});

export default BasicLayout;