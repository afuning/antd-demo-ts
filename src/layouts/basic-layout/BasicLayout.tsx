import React from 'react';
import BaseRouters from '@/router/index';
import './style.less';
import BasicMenu from './BasicMenu';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;

const initialState = { collapsed: false };
type State = Readonly<typeof initialState>;
type PropsType = {
}

class BasicLayout extends React.Component <PropsType, State> {
  readonly state: State = initialState;

  private onCollapse = () => this.setState(handleCollapse);

  public handleClick = (e: any) => {
    console.log(e);
  };

  render () {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Header className='my-header' style={{ padding: 0 }} />
        <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={this.onCollapse}
            theme="light"
          >
            <BasicMenu />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
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
      </Layout>
    );
  }
}
const handleCollapse = (prevState: State) => ({
  collapsed: !prevState.collapsed,
});

export default BasicLayout;