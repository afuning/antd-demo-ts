import React from 'react';
import {Typography, Table} from 'antd';
import style from '../style.module.less';
import withTablePage, { InjectedTablePageProps } from '@/stdcpts/withTablePage';
import { ColumnProps } from 'antd/lib/table';

// 当前表格数据接口
interface iUser {
  name: string;
  id: number;
}
// 当前组件props接口
interface PropsType extends InjectedTablePageProps  {
  dataSource: iUser[];
}
// 当前组件state接口
const initialState = {};
interface StateType {}

class SubaccountSetting extends React.Component<PropsType, StateType> {
  readonly state: StateType = initialState;
  columns: ColumnProps<iUser>[] =[
    {title: "ID", dataIndex: 'id'},
    {title: "姓名", dataIndex: 'name'}
  ];

  render () {
    const {dataSource, pagination, handleTableChange, loading} = this.props;
    return (
      <div className={style['subaccount-setting']}>
        <Typography.Title level={4}>子账号设置</Typography.Title>
        <Table
          columns={this.columns}
          dataSource={dataSource}
          pagination={pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
    )
  }
}
const SubaccountSettingWithTablePage = withTablePage(SubaccountSetting, {apiUrl: '/subaccount/search'})

export default SubaccountSettingWithTablePage