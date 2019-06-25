import {loadable} from '@util/index';
import {iRoute} from "@models/global.interface";
import {sortToRoute} from '@/router/util';
// 国内短信-手工
const Recharge = loadable(() => import('@components/financial/recharge/Index'));
// 国内短信-会员营销
const Invoice = loadable(() => import('@components/financial/invoice/Index'));

// 需显示在侧边栏中
export const FinancialRouter: iRoute[] = [
  {
    name: '充值',
    path: '/financial/recharge',
    component: Recharge
  },
  {
    name: '发票',
    path: '/financial/invoice',
    component: Invoice
  }
]

// 不需显示在侧边栏中
const NotMenuFinancialRouter: iRoute[] = [
]

export const sortFinancialRouter = sortToRoute([...NotMenuFinancialRouter, ...FinancialRouter]);