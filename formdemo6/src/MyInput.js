import React, { Component } from "react";

export default class MyInput extends Component {
  constructor(props) {
    super(props);
    this.inpRef = React.createRef();
  }
  giveFocus() {
    this.inpRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inpRef}></input>
      </div>
    );
  }
}
