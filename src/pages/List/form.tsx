import * as React from 'react';
import IFormDataProps from '../../Interface/components/IForm';
import { Form, Checkbox, Radio, Input, DatePicker } from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { TextArea } = Input;

class PoetyForm extends React.Component<IFormDataProps, any> {
  constructor(props: IFormDataProps, context: any) {
    super(props);
    this.state = {
      name: 'React Intl',
      code: '',
      isAsync: false
    };
  }
  public render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const { formData } = this.props
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form">
        <FormItem  {...formItemLayout} label={"标题"}>
          {getFieldDecorator("title", {
            initialValue: formData.title,
            rules: [{ required: true, message: "请填写标题", pattern: /^\S/ }],
          })(
            <Input maxLength={30} type="input" placeholder={formData.title} />
            )}
        </FormItem>
        <FormItem  {...formItemLayout} label={"内容"}>
          {getFieldDecorator("content", {
            rules: [{ required: true, message: "请填写内容", pattern: /^\S/ }],
            initialValue: formData.content
          })(
            <TextArea placeholder='请输入内容' />
            )}
        </FormItem>
        <FormItem  {...formItemLayout}
          label={"分类"}
        >
          {getFieldDecorator('type', { rules: [{ message: "请选择分类", required: true }], initialValue: formData.type })(
            <RadioGroup >
              <Radio value="poety" className="levl-3">诗</Radio>
              <Radio value="chant" className="levl-2">词</Radio>
              <Radio value="lyrics" className="levl-1">歌曲</Radio>
              <Radio value="article" className="levl-1">文章</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem  {...formItemLayout} label={"是否写给他人"}
        >
          {getFieldDecorator('toOther', { rules: [{ required: true }], initialValue: formData.toOther })(
            <Checkbox />
          )}
        </FormItem>
        <FormItem  {...formItemLayout} label={"创作日期"}
        >
          {getFieldDecorator('remindDate', {
            initialValue: formData.createTime,
            rules: [{ type: 'object', required: true, message: '请选择日期' }],
          })(
            <DatePicker />
            )}
        </FormItem>
      </div>
    )
  }
}
export default Form.create()(PoetyForm);
