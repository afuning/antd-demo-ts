import React from 'react';
import style from './style.module.less';
import G6Demo1 from './Demo1';
import G6Demo2 from './Demo2';
import {Tabs} from 'antd';
const { TabPane } = Tabs;

function G6Component () {
  return (
    <div className={style['g6-demo']}>
      <Tabs defaultActiveKey="1">
        <TabPane forceRender={false} tab={`Demo-1`} key="1">
          <G6Demo1 />
        </TabPane>
        <TabPane forceRender={false} tab={`Demo-2`} key="2">
          <G6Demo2 />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default G6Component;