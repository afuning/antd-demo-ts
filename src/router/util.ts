import {iRoute} from "@models/global.interface";
import RouterConfig from "./routerConfig";
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