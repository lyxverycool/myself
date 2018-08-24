
/**
 * @Form Interface
 * @description 表单参数接口
 * @time 2018/5/11
 * @author cool
 */

interface IFormProps extends React.Props<any> {
  name: string,
  type: string,
  style: string,
  placeholder: string,
  required: boolean,
  requiredMsg: string,
  ruleMsg: string, // 自定义验证
  [propName: string]: any,
  showName: boolean,
  value: any
}


export default interface IFormDataProps extends React.Props<IFormProps> {
  formData: any,
  form: any
}