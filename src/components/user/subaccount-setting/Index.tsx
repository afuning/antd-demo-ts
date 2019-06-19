import React from 'react';
import {Table, Typography, Divider, Button} from 'antd';
import { ColumnProps } from 'antd/lib/table';
import style from '../style.module.less';

interface IUser {
  key: number;
  name: string;
}
interface PropsType {}

const data: IUser[] = [{
  key: 0,
  name: 'Jack',
}];


class SubaccountSetting extends React.Component<PropsType> {
  columns: ColumnProps<IUser>[] = [{
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  }, {
    key: 'action',
    title: 'Action',
    dataIndex: 'action',
    render: () => (
      <span>
        <Button type="link" onClick={this.handleDelete}>Delete</Button>
        <Divider type="vertical" />
        <Button type="link" onClick={this.handleDelete}>Add</Button>
      </span>
    )
  }];
  handleDelete = () => {
    console.log(11111);
  };
  render () {
    return (
      <div className={style['subaccount-setting']}>
        <Typography.Title level={4}>子账号设置</Typography.Title>
        <Table<IUser> columns={this.columns} dataSource={data} />
      </div>
    )
  }
}

export default SubaccountSetting