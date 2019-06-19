import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
interface State {}
interface PropType extends FormComponentProps {

}

class BasicForm extends React.Component<PropType, State> {
  formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 12 },
  };
  tailFormItemLayout = {
    wrapperCol: {
      offset: 0,
    },
  };
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Typography.Title level={4}>基础设置</Typography.Title>
        <Form {...this.formItemLayout}>

          <Form.Item label="账号">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: '请输入账号',
                },
              ],
            })(<Input placeholder="请输入账号" />)}
          </Form.Item>

          <Form.Item label="公司名称">
            {getFieldDecorator('company', {
              rules: [
                {
                  required: true,
                  message: '请输入公司名称',
                },
              ],
            })(<Input placeholder="请输入公司名称" />)}
          </Form.Item>

          <Form.Item label="联系人">
            {getFieldDecorator('contacter', {
              rules: [
                {
                  required: true,
                  message: '请输入联系人',
                },
              ],
            })(<Input />)}
          </Form.Item>

          <Form.Item {...this.tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>

        </Form>
      </div>
    );
  }
}

const BasicSetting = Form.create({ name: 'validate_other' })(BasicForm);


export default BasicSetting;