import React from 'react';
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";
import RouterConfig from '@/router/routerConfig';
import { iIcon, IBase } from '@/models/global.interface';
import UserStore from '@store/modules/user'
import { Menu, Icon } from 'antd';
const {SubMenu, ItemGroup} = Menu;

const initialState = { defaultSelectedKeys: '/' };
type State = Readonly<typeof initialState>;

interface PropsType extends IBase {
  title?: string,
}
interface InjectedProps extends PropsType {
  userStore: UserStore;
}
@inject("userStore")
@observer
class BasicMenu extends React.Component <PropsType, State> {
  readonly state: State = initialState;

  get injected() {
    return this.props as InjectedProps;
  }

  private handleMenu = (e: any) => {
    this.props.history.push(e.key);
  };

  componentWillMount () {
    const {pathname} = this.props.history.location;
    this.setState({
      defaultSelectedKeys: pathname
    });
    console.log(this.injected)
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
  routes: [],
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


export default withRouter(BasicMenu)