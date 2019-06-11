import React from 'react';
import './style.less';
import RouterConfig from '@/router/routerConfig';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const { Header, Content, Sider } = Layout;

const initialState = { collapsed: false };
type State = Readonly<typeof initialState>;
type PropsType = {
  children?: JSX.Element
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
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
              onClick={this.handleClick}
            >
              <Menu.SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Navigation Three</span>
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>管理控制台</span>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
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
              {this.props.children}
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