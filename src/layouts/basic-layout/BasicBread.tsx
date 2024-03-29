import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { inject, observer } from "mobx-react";
import {RouterStore} from '@store/index';
import { Breadcrumb } from 'antd';
import {searchRouterLinkList} from '@/router/util';
import {iRouteComponent} from '@models/global.interface'; 

interface BasicBreadType extends iRouteComponent {
};
interface InjectedProps extends BasicBreadType {
  routerStore: RouterStore;
};

@inject("routerStore")
@observer
class BasicBread extends React.Component <BasicBreadType> {

  get injected() {
    return this.props as InjectedProps;
  };

  render () {
    const {pathname} = this.injected.routerStore.history.location;
    const c = searchRouterLinkList(pathname);
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        {c.map(BreadcrumbItem)}
      </Breadcrumb>
    );
  };
}

interface BreadcrumbItem {
  name: string;
  path?: string
}

const BreadcrumbItem: React.FC<BreadcrumbItem> = ({name, path}) => {
  return (
    <Breadcrumb.Item key={name}>
      {path ? (
        <Link to={path}>{name}</Link>
      ) : <span>{name}</span>}
    </Breadcrumb.Item>
  )
}

export default withRouter(BasicBread);