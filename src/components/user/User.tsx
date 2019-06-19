import React from 'react';
import { Tabs } from 'antd';
import BasicSetting from './basic-setting/Index';
import SaveSetting from './save-setting/Index';
import MessageSetting from './message-setting/Index';
import SubaccountSetting from './subaccount-setting/Index';
import style from './style.module.less';
const {TabPane} = Tabs;

const User: React.FC = () => {
  return (
    <div className={style.user}>
      <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 600}}>
        <TabPane tab="基础设置" key="1">
          <BasicSetting />
        </TabPane>
        <TabPane tab="安全设置" key="2">
          <SaveSetting />
        </TabPane>
        <TabPane tab="消息设置" key="3">
          <MessageSetting />
        </TabPane>
        <TabPane tab="账户绑定" key="4">
          <SubaccountSetting />
        </TabPane>
      </Tabs>
    </div>
  );
}


export default User;