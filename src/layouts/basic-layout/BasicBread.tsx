import React from 'react';
import { inject, observer } from "mobx-react";
import {RouterStore} from '@store/index';
import { Breadcrumb } from 'antd';
import RouterConfig, {searchRouterLinkList} from '@/router/routerConfig';

const initialState = { c: '/' };
type State = Readonly<typeof initialState>;

interface BasicBreadType {

};
interface InjectedProps extends BasicBreadType {
  routerStore: RouterStore;
};

@inject("routerStore")
@observer
class BasicBread extends React.Component <BasicBreadType, State> {
  readonly state: State = initialState;

  get injected() {
    return this.props as InjectedProps;
  }
  
  componentDidMount () {
    console.log(RouterConfig);
    console.log(searchRouterLinkList('/app/sms-domestic/statistic/handle'));
  };

  render () {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    );
  };
}

export default BasicBread;