import React from 'react';
import { Form, Input, Button, Typography, Switch } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
interface State {}
interface PropType extends FormComponentProps {

}

class SaveForm extends React.Component<PropType, State> {
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
        <Typography.Title level={4}>安全设置</Typography.Title>
        <Form {...this.formItemLayout}>

          <Form.Item label="紧急联系人">
            {getFieldDecorator('emergencyContact', {})(<Input placeholder="请输入紧急联系人姓名" />)}
          </Form.Item>

          <Form.Item label="紧急联系人手机">
            {getFieldDecorator('emergencyContactPhone', {})(<Input placeholder="请输入公司紧急联系人手机" />)}
          </Form.Item>

          <Form.Item label="异常登录提醒">
            {getFieldDecorator('contacter', {})(<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />)}
          </Form.Item>

          <Form.Item label="密保手机">
            {getFieldDecorator('secretSecurity', {})(<Input placeholder="请输入密保手机" />)}
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

const SaveSetting = Form.create({ name: 'validate_other' })(SaveForm);


export default SaveSetting;