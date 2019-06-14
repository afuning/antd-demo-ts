import loadable from '../util/loadable'
import {ProductRouter} from '@components/product/router/index';
// 管理控制台
const Dashboard = loadable(() => import('@components/dashboard/Dashboard'));
// 账户设置
const User = loadable(() => import('@components/user/User'));
// 应用中心
const Product = loadable(() => import('@components/product/Product'));
const RouterConfig: any[] = [
  {
    name: '管理控制台',
    path: '/dashboard',
    component: Dashboard,
    icon: 'control',
    routes: []
  },
  {
    name: '账户设置',
    path: '/user',
    component: User,
    icon: 'user',
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
  }
];

export default RouterConfig;