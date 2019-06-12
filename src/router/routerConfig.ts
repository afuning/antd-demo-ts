import loadable from '../util/loadable'
import {ProductRouter} from '@components/product/router/index';
const Dashboard = loadable(() => import('@components/dashboard/Dashboard'));
const User = loadable(() => import('@components/user/User'));
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
  // {
  //   name: '所有产品',
  //   routes: [
  //     {
  //       name: '国内短信',
  //       path: '/sms-domestic',
  //       component: Product,
  //       icon: 'appstore',
  //       routes: [
          
  //       ]
  //     }
  //   ]
  // },
];

export default RouterConfig;