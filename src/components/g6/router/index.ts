import {loadable} from '@util/index';
import {iRoute} from "@models/global.interface";
import {sortToRoute} from '@/router/util';

const G6Demo = loadable(() => import('../demo/Index'));

// 需显示在侧边栏中
export const G6Router: iRoute[] = [
]

// 不需显示在侧边栏中
const NotMenuG6Router: iRoute[] = [
  {
    name: 'Demo',
    path: '/g6/demo',
    component: G6Demo
  }
]

export const sortG6Router = sortToRoute([...NotMenuG6Router, ...G6Router]);