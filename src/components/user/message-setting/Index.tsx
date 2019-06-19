import React from 'react';
import { Form, Icon, Input, Button, Typography, Row, Col} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
interface State {}
interface PropType extends FormComponentProps {

}

class MessageForm extends React.Component<PropType, State> {
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
        <Typography.Title level={4}>消息设置</Typography.Title>
        <Form {...this.formItemLayout}>

          <Form.Item label="免费短信提醒">
            {getFieldDecorator('freeMessage', {})(
              <Row>
                <Col>
                  <Input placeholder="请输入手机号" />
                </Col>
                <Col>
                  <Input placeholder="请输入手机号" />
                </Col>
              </Row>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="dashed" style={{ width: '100%' }}>
              <Icon type="plus" />新增手机号
            </Button>
          </Form.Item>

          <Form.Item label="免费邮件提醒">
            {getFieldDecorator('freeMessage', {})(
              <Row>
                <Col>
                  <Input placeholder="请输入邮箱号" />
                </Col>
                <Col>
                  <Input placeholder="请输入邮箱号" />
                </Col>
              </Row>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="dashed" style={{ width: '100%' }}>
              <Icon type="plus" />新增邮箱号
            </Button>
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

const MessageSetting = Form.create({ name: 'validate_other' })(MessageForm);


export default MessageSetting;