import {iRoute} from "@models/global.interface";

export const sortToRoute = (route: iRoute[]) => {
  let result: iRoute[] = [];
  const rl = (r: iRoute[]) => {
    r.forEach((nextr: iRoute) => {
      if (nextr.path) {
        result.push({path: nextr.path, component: nextr.component, name: nextr.name});
      }
      if (nextr.routes && nextr.routes.length > 0) {
        rl(nextr.routes);
      }
    })
  }
  rl(route)
  return result;
}