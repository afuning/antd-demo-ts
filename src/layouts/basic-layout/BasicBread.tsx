import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { inject, observer } from "mobx-react";
import {RouterStore} from '@store/index';
import { Breadcrumb } from 'antd';
import {searchRouterLinkList} from '@/router/routerConfig';
import {iRouteComponent} from '@models/global.interface'; 

const initialState = { c: [] };
interface State {
  c: any[],
};

interface BasicBreadType extends iRouteComponent {

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
  };
  
  componentDidMount () {
    console.log(this.injected.routerStore);
    // const {pathname} = this.injected.routerStore.history.location;
    // this.setState({
    //   c: searchRouterLinkList(pathname)
    // })
    // console.log(searchRouterLinkList('/app/sms-domestic/handle'));
  };

  render () {
    const {pathname} = this.injected.routerStore.history.location;
    const c = searchRouterLinkList(pathname);
    console.log(c);
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