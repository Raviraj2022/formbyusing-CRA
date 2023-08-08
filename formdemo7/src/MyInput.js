import React, { Component } from "react";

export default class MyInput extends Component {
  constructor(props) {
    super(props);
    this.inpRef = React.createRef();
  }
  isEmpty() {
    return this.inpRef.current.value.length === 0;
  }
  selectText() {
    this.inpRef.current.select();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inpRef} />
      </div>
    );
  }
}
