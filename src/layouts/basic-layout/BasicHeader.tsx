import React from 'react';
import { inject, observer } from "mobx-react";
import {UserStore} from '@store/index';
import style from './style.module.less';
import { Layout, Avatar, Row, Col, Popover, Icon, Tag, Button, Divider } from 'antd';

const initialState = {};
type State = Readonly<typeof initialState>;

interface PropsType {
  title?: string,
}
interface InjectedProps extends PropsType {
  userStore: UserStore;
}

@inject("userStore")
@observer
class BasicHeader extends React.Component<PropsType> {
  readonly state: State = initialState;

  get injected() {
    return this.props as InjectedProps;
  }

  render () {
    const {userStore} = this.injected
    return (
      <Layout.Header className={style['my-header']}>
        <Row type="flex" justify="end" align="middle">
          
          <Col style={{paddingRight: '24px'}}>
            <Popover content={<UserMenu {...userStore} />} placement="bottomRight" arrowPointAtCenter>
              <div className={style['my-header__user']}>
                <Avatar src={userStore.avatar} />
                <span className={style['my-header__name']}>{userStore.name}</span>
                <Icon type="caret-down" />
              </div>
            </Popover>
          </Col>

        </Row>
      </Layout.Header>
    )
  }
}

const UserMenu: React.FC<UserStore> = ({name}) => {
  return (
    <div className={style['my-header-menu']}>

      <div className={style['my-header-menu__top']}>
        {name}<br />
        <span className={style['my-header-menu__verify']}>已实名认证&nbsp;&nbsp;<Icon type="check-circle" /></span>
        <div className={style['my-header-menu__level']}><Tag color="orange">orange</Tag></div>
      </div>

      <div className={style['my-header-menu__list']}>
        <div className={style['item']}>
          <div className={style['item-left']}>
            <Icon style={{ fontSize: '20px'}} type="account-book" />
            <span>&nbsp;余额&nbsp;&nbsp;</span>
            <Button type="default" size="small">充值</Button>
          </div>
          <div className={style['item-right']}>¥0</div>
        </div>

        <div className={style['item']}>
          <div className={style['item-left']}>
            <Icon style={{ fontSize: '20px'}} type="crown" />
            <span>&nbsp;积分&nbsp;&nbsp;</span>
            <Button type="default" size="small">兑换</Button>
          </div>
          <div className={style['item-right']}>0</div>
        </div>
      </div>

      <Divider />

      <div className={style['my-header-menu__list']}>
        <div className={style['item']}>
          <div className={style['item-left']}>
            <span>&nbsp;账户设置&nbsp;&nbsp;</span>
          </div>
          <div className={style['item-right']}>
            <Icon type="right" />
          </div>
        </div>

        <div className={style['item']}>
          <div className={style['item-left']}>
            <span>&nbsp;系统设置&nbsp;&nbsp;</span>
          </div>
          <div className={style['item-right']}>
            <Icon type="right" />
          </div>
        </div>
      </div>

      <Divider className={style['my-header-menu__divider']} />

      <Row type="flex" className={style['my-header-menu__bottom']}>
        <Col span={12} style={{textAlign: "left", paddingLeft: "8px"}}>
          <a className={style["bottom-link"]} href="/">
            <span style={{fontSize: "12px"}}>联系客服</span>
            <Icon type="question-circle" />
          </a>
        </Col>
        <Col span={12} style={{textAlign: "right", paddingRight: "8px"}}>
          <a className={style["bottom-link"]} href="/">
            <span style={{fontSize: "12px"}}>退出登录</span>
            <Icon type="logout" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default BasicHeader;