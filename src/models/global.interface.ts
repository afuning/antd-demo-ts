import { RouteComponentProps } from 'react-router-dom';
import { PaginationConfig } from 'antd/lib/table';
import {
  UserStore,
  ConstStroe
} from '@store/index';

export interface iIcon {
  type: string;
  theme: "filled" | "outlined" | "twoTone" | undefined;
}

export interface iRoute {
  icon?: string | iIcon,
  name: string,
  routes?: iRoute[];
  path?: string;
  component?: any;
}

export interface iPagination {
  pagination: PaginationConfig
}

export interface iRouteComponent extends RouteComponentProps {}
