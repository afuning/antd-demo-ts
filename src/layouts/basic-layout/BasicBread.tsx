import React from 'react';
import { Breadcrumb } from 'antd';

type BasicBreadType = {};
class BasicBread extends React.Component <BasicBreadType> {
  state = {
    c: '/',
  };
  
  render () {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    );
  };
}

export default BasicBread;