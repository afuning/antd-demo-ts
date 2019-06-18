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
  },
  {
    name: '财务',
    path: '/financial',
    icon: 'account-book',
    component: Financial,
    routes: [
      ...FinancialRouter,
    ]
  }
];

// 查找路由链路
export const searchRouterLinkList = (path: string): any[] => {
  let result: any[] = [];
  const c: any = (config: iRoute[]) => {
    for (let i = 0; i < config.length; i++) {
      let r: iRoute = config[i];
      if (r.path === path) {
        result.push(r);
        return r;
      } else if (r.routes !== undefined) {
        let k = c(r.routes);
        if (k) {
          result.push(r);
        }
      }
    }
  }
  c(RouterConfig);
  return result.reverse();
}

/**
 * 查找当前路由匹配menu
 * 若存在menu中则选中
 * 若不存在menu中则，去掉最后一位路径再次匹配
 * 
 * @param {String} path
 */
export const matchMenuPath = (path: string) => {
  let pathArray = path.split('/');
  const c: any = (config: iRoute[], rPath: string) => {
    for (let i = 0; i < config.length; i++) {
      let r: iRoute = config[i];
      if (r.path === rPath) {
        return r.path;
      } else if (r.routes !== undefined) {
        let k = c(r.routes, rPath);
        if (k) return k;
      }
    }
  }
  do {
    let r = c(RouterConfig, pathArray.join('/'));
    if (r) {
      return r;
    } else {
      pathArray.pop();
    }
  } while (pathArray.length >= 1);
  return '/';
}

export default RouterConfig;