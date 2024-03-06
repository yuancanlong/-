import React, { Component } from 'react';

import Context from '../context';
export default class Input extends Component {
  static contextType = Context;
  // static getDerivedStateFromProps(props, state) {
  //   if (props.value !== state.txt) {
  //     return {
  //       txt: props.value,
  //     };
  //   }
  //   return null;
  // }
  constructor(props: any) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
  }
  state = {
    txt: '',
  };
  componentDidMount() {
    // this.setState({ txt: this.context.getValue()[this.props.name] });
  }
  inputChange(e: any) {
    this.setState({
      txt: e.target.value,
    });
  }

  render() {
    const { type }: any = this.props;
    return (
      // <Context.Consumer>
      //   {(v: any) => {
      // @ts-ignore
      // return (
      <input
        type={type}
        value={this.props.value}
        // onChange={this.inputChange}
        onChange={(e) => {
          this.inputChange(e);
          this.props?.onChange?.(e);
        }}
        // onChange={(e) => {
        // handleChange();
        // v.updateContextValue({ usename: name, value: e.target.value });
        // handleChange(name, e.target.value);
        // }}
      />
      // );
      //   }}
      // </Context.Consumer>
    );
  }
}
//@ts-ignore
Input.displayName = 'input';
