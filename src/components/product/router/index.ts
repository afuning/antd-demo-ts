import loadable from '@util/loadable';
import {iRoute} from "@models/global.interface";
import {sortToRoute} from '@util/index';
// 国内短信-手工
const Handle = loadable(() => import('@components/product/domestic/Handle'));
// 国内短信-会员营销
const Member = loadable(() => import('@components/product/domestic/Member'));
// 国内短信
const StaticIndex = loadable(() => import('@components/product/domestic/statistic/Index'));

// 需显示在侧边栏中
export const ProductRouter: iRoute[] = [
  {
    name: '国内短信',
    routes: [
      {
        name: '手工发送',
        path: '/app/sms-domestic/handle',
        component: Handle
      },
      {
        name: '会员发送',
        path: '/app/sms-domestic/member',
        component: Member
      }
    ]
  }
]

// 不需显示在侧边栏中
const NotMenuProductRouter: iRoute[] = [
  {
    name: '短信发送数据',
    path: '/app/sms-domestic/statistic/:direction(handle|member)',
    component: StaticIndex
  }
]

export const sortProductRouter = sortToRoute([...ProductRouter, ...NotMenuProductRouter]);