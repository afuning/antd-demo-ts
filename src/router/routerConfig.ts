import loadable from '../util/loadable'
import {iRoute} from "@models/global.interface";
import {ProductRouter} from '@components/product/router/index';
import {FinancialRouter} from '@components/financial/router/index';
// 管理控制台
const Dashboard = loadable(() => import('@components/dashboard/Dashboard'));
// 账户设置
const User = loadable(() => import('@components/user/User'));
// 应用中心
const Product = loadable(() => import('@components/product/Product'));
// 财务
const Financial = loadable(() => import('@components/financial/Financial'));
const RouterConfig: iRoute[] = [
  {
    name: '管理控制台',
    path: '/dashboard',
    component: Dashboard,
    icon: 'control',
    routes: []
  },
  {
    name: '应用中心',
    path: '/app',
    icon: 'appstore',
    component: Product,
    routes: [
      ...ProductRouter,
    ]
  },
  {
    name: '财务',
    path: '/financial',
    icon: 'account-book',
    component: Financial,
    routes: [
      ...FinancialRouter,
    ]
  },
  {
    name: '账户设置',
    path: '/user',
    component: User,
    icon: 'user',
    routes: []
  }
];

export default RouterConfig;