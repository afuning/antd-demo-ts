import React from 'react';
import { inject, observer } from "mobx-react";
import {matchMenuPath} from '@/router/util';
import RouterConfig from '@/router/routerConfig';
import { iIcon, iRoute } from '@/models/global.interface';
import {RouterStore} from '@store/index';
import { Menu, Icon } from 'antd';
const {SubMenu, ItemGroup} = Menu;

const initialState = { defaultSelectedKeys: '/'};
type State = Readonly<typeof initialState>;

interface PropsType {
  title?: string,
}
interface InjectedProps extends PropsType {
  routerStore: RouterStore;
}
@inject("routerStore")
@observer
class BasicMenu extends React.Component <PropsType, State> {
  readonly state: State = initialState;

  get injected() {
    return this.props as InjectedProps;
  }

  private handleMenu = (e: any) => {
    this.injected.routerStore.history.push(e.key);
  };

  componentWillMount () {
    const {pathname} = this.injected.routerStore.history.location;
    this.setState({
      defaultSelectedKeys: matchMenuPath(pathname)
    });
  };

  render () {
    return (
      <Menu
        defaultSelectedKeys={[this.state.defaultSelectedKeys]}
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        onClick={this.handleMenu}
      >
        {
          RouterConfig.map(MenuSub)
        }
      </Menu>
    )
  }
}

type SubPropsType = {
  routes?: iRoute[];
  name: string,
  path?: string,
  icon?: string | iIcon
}

const MenuSub: React.FC<SubPropsType> = ({routes, name, path, icon}) => {
  if (path && routes && routes.length > 0) {
    return (
    <SubMenu key={path} title={<TitleRender {...{name, icon}} />}>
        {routes.map(MenuSub)}
      </SubMenu>
    );
  } else if (!path && routes && routes.length > 0) {
    return (
      <ItemGroup key={name} title={name}>
        {routes.map(MenuSub)}
      </ItemGroup>
    )
  } else {
    return (
      <Menu.Item key={path}>
        <TitleRender {...{name, icon}} />
      </Menu.Item>
    );
  }
}

type TitlePropsType = {
  name: string,
  icon?: string | iIcon
}

const TitleRender: React.FC<TitlePropsType> = ({name, icon}) => {
  if (icon && typeof icon === 'string') {
    return (
      <span>
        <Icon type={icon} />
        <span>{name}</span>
      </span>
    )
  } else if (icon && typeof icon === 'object' && icon.type) {
    return (
      <span>
        <Icon type={icon.type} theme={icon.theme} />
        <span>{name}</span>
      </span>
    )
  } else {
    return (
      <span>
        <span>{name}</span>
      </span>
    )
  }
}


export default BasicMenu