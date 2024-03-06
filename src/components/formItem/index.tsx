import React, { Component } from 'react';
import Context from '../context';
export default class FormItem extends Component {
  static contextType = Context;
  static unregister = null;
  constructor(props: any) {
    super(props);
    this.state = {
      update: null,
    };
  }
  componentDidMount() {
    this.unregister = this.context.registerField(this);
  }
  componentWillUnmount() {
    if (this.unregister) {
      this.unregister?.();
    }
  }
  onStoreChange = () => {
    this.forceUpdate();
  };

  render() {
    const { children, label, name, ...childrenProps }: any = this.props;
    const arr: any = [];
    React.Children.forEach(children, (child: any) => {
      const Children = React.cloneElement(child, {
        key: name,
        name: name,
        value: this.context.getValue()[name] || '',
        onChange: (e) => {
          this.context.setValue({ [name]: e.target.value });
        },
        ref: (input) => {
          // console.log(input);
        },
        //@ts-ignore
        // value: this.Context.data.value, //this.state.formData[name] || '',
      });
      arr.push(Children);
    });

    return (
      <div>
        <label>{label}:</label>
        {/* {React.cloneElement(children, { ...childrenProps })} */}
        {arr}
      </div>
    );
  }
}
//@ts-ignore
FormItem.displayName = 'formItem';
