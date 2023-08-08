import React, { Component } from "react";
import MyInput from "./MyInput";
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    if (this.childRef.current.isEmpty()) {
      alert("There is no text!!");
    } else {
      this.childRef.current.selectText();
    }
  }
  render() {
    return (
      <div>
        <MyInput ref={this.childRef} />
        <button onClick={this.handleClick}>Select text</button>
      </div>
    );
  }
}
