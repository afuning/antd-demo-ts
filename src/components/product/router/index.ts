import loadable from '@util/loadable';
import {iRoute} from "@models/global.interface";
import {sortToRoute} from '@util/index';
const Handle = loadable(() => import('@components/product/domestic/Handle'));
const Member = loadable(() => import('@components/product/domestic/Member'));

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
  },
  {
    name: '国际短信',
    routes: [
      {
        name: '手工发送',
        path: '/app/foreign/handle',
        component: Handle
      },
      {
        name: '会员发送',
        path: '/app/foreign/member',
        component: Member
      }
    ]
  }
]

export const sortProductRouter = sortToRoute(ProductRouter);