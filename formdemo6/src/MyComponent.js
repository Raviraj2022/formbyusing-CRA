import React, { Component } from "react";
import MyInput from "./MyInput";
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.childRef.current.giveFocus();
  }
  render() {
    return (
      <div>
        <MyInput ref={this.childRef} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
