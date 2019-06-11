import loadable from '../util/loadable'
const Home = loadable(() => import('@components/home/Home'));
const User = loadable(() => import('@components/user/User'));
const RouterConfig: any[] = [
  {
    name: '管理控制台',
    path: '/',
    component: Home,
  },
  {
    name: '账户设置',
    path: '/user',
    component: User
  },
];

export default RouterConfig;