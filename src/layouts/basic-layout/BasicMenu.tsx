import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import RouterConfig from '@/router/routerConfig';
import { iIcon } from '@/models/global.interface';
import { Menu, Icon } from 'antd';
const {SubMenu, ItemGroup} = Menu;

const initialState = {  };
type State = Readonly<typeof initialState>;
interface PropsType extends RouteComponentProps {
}

class BasicMenu extends React.Component <PropsType, State> {
  readonly state: State = initialState;

  private handleMenu = (e: any) => {
    console.log(e);
    this.props.history.push(e.key);
  };

  render () {
    return (
      <Menu
        defaultSelectedKeys={[RouterConfig[0].path]}
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


export default withRouter(BasicMenu);