/**
 * 练习高阶组件
 * 基础table组件
 * 
 * @param {Component} 组件
 * @param {iConfig} 配置项
 * 
 */
import { Subtract } from 'utility-types';
import React from 'react';
import { PaginationConfig } from 'antd/lib/table';
import {backCaller} from '@util/index';
import {CODE} from '@util/index';
import {message} from 'antd';

// 传入组件所需props
export interface InjectedTablePageProps {
  dataSource: any;
  pagination: PaginationConfig;
  loading: boolean;
  handleTableChange(): void;
}

// 配置config接口
interface iConfig {
  apiUrl: string
}

// 初始化State
const initialState = {
  pagination: {
    pageSize: 10,
    current: 1,
    total: 11,
  },
  loading: false,
  dataSource: []
};
// State接口
interface State {
  pagination: PaginationConfig,
  loading: boolean,
  dataSource: any
};

const withTablePage = <P  extends InjectedTablePageProps>(WrappedComponent: React.ComponentType<P>, config: iConfig) => 
  class WithTablePage extends React.Component<Subtract<P, InjectedTablePageProps>, State>  {
    readonly state = {
      ...initialState,
    };

    async componentDidMount() {
      // 获取数据
      this.fetch(this.state.pagination)
    };

    fetch = async ({...pagination}) => {
      try {
        this.setState({ loading: true });
        const res = await backCaller(config.apiUrl, {...pagination});
        if (res.code === CODE.OK) {
          this.setState({
            dataSource: res.data.list,
            pagination: pagination,
            loading: false
          })
        } else {
          throw res.message;
        }
      } catch (error) {
        message.error(error);
        this.setState({ loading: false });
      }
    };

    handleTableChange = (pagination: PaginationConfig) => {
      this.fetch({...pagination})
    };

    render () {
      const { ...props } = this.props;
      const { dataSource, pagination, loading } = this.state;
      return (<div>
        <WrappedComponent
          {...props as P}
          handleTableChange={this.handleTableChange}
          dataSource={dataSource}
          pagination={pagination}
          loading={loading}
        />
      </div>)
    }
  }
export default withTablePage;
