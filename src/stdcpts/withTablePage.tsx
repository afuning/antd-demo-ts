// 练习高阶组件
import { Subtract } from 'utility-types';
import React from 'react';
import { PaginationConfig } from 'antd/lib/table';
import {backCaller} from '@util/back/apis';
import {CODE} from '@util/constants/index';
import {message} from 'antd';

export interface InjectedTablePageProps {
  dataSource: any;
  pagination: PaginationConfig;
  loading: boolean;
  handleTableChange(): void;
}

const initialState = {
  pagination: {
    pageSize: 10,
    current: 1,
    total: 11,
  },
  loading: false,
  dataSource: []
};
interface State {
  pagination: PaginationConfig,
  loading: boolean,
  dataSource: any
};

interface iConfig {
  apiUrl: string
}

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

    componentDidUpdate() {
      // 获取数据
    };

    handleButton = () => {
      console.log(11111);
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
