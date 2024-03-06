import React, { Component } from 'react';
import Context from '../context';

export default class Form extends Component {
  state = {
    formData: {},
  };
  static contextType = Context;
  // const contextData: any = useContext(Context);
  submitForm = (cb: any) => {
    cb && cb({ ...this.state.formData });
  };

  resetForm = () => {
    // const { formData }: any = this.state;
    // Object.keys(formData).forEach((item) => {
    //   formData[item] = '';
    // });
    // this.setState(formData);
  };

  updateValue = (name: any, value: any) => {
    this.context.setValue({ name: value });
  };
  render() {
    const { children } = this.props;
    const renderChildren: any = [];
    React.Children.forEach(children?.props?.children, (child: any) => {
      if (child.type.displayName === 'formItem') {
        const { name } = child.props;
        const Children = React.cloneElement(child, {
          key: name,
          // handleChange: this.updateValue,
          // value: this.context.getValue()[name] || '',
          //@ts-ignore
          // value: this.Context.data.value, //this.state.formData[name] || '',
        });
        renderChildren.push(Children);
      }
    });
    return children;
  }
}
//@ts-ignore
Form.displayName = 'form';
