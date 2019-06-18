import React from 'react';
import { Typography, Divider, Row, Col } from 'antd';
import style from './style.module.less';
import moment from 'moment';

class Dashboard extends React.Component {
  render () {
    return (
      <div className={style.dashboard}>
        <Row type="flex" align="middle">
          <Col span={6}><HeaderRender /></Col>

          <Col span={8}><StatisticLeftRender /></Col>

          <Col span={10}><StatisticRightRender /></Col>
        </Row>
        <Divider />
      </div>
    );
  };
}

const HeaderRender: React.FC = () => {
  return (
    <Row type="flex" align="middle"> 
      <Col span={22}>
        <Typography.Title level={2}>今日，</Typography.Title>
        {moment().format('YYYY年MM月DD日')}，欢迎您回来。
      </Col>
      <Divider type="vertical" style={{height: "100px"}} />
    </Row>
  )
}

const StatisticLeftRender: React.FC = () => {
  return (
    <Row type="flex" align="middle" style={{textAlign: "center"}}>
      <Col span={11}>
        <span>发送条数</span>
        <Typography.Title level={4}>11111</Typography.Title>
      </Col>
      <Col span={11}>
        <span>失败条数</span>
        <Typography.Title level={4}>1111</Typography.Title>
      </Col>
      <Divider type="vertical" style={{height: "100px"}} />
    </Row>
  )
}

const StatisticRightRender: React.FC = () => {
  return (
    <Row type="flex" align="middle" style={{textAlign: "center"}}>
      <Col span={8}>
        <span>成功</span>
        <Typography.Title level={4}>95%</Typography.Title>
      </Col>
      <Col span={8}>
        <span>失败</span>
        <Typography.Title level={4}>2%</Typography.Title>
      </Col>
      <Col span={8}>
        <span>未知</span>
        <Typography.Title level={4}>3%</Typography.Title>
      </Col>
    </Row>
  )
}


export default Dashboard;