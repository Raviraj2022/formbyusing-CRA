import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.unameRef = React.createRef();
    this.emailRef = React.createRef();
    this.pwdRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(
      "you typed:\n" +
        this.unameRef.current.value +
        "\n" +
        this.emailRef.current.value +
        "\n" +
        this.pwdRef.current.value
    );
    this.unameRef.current.value = "";
    this.emailRef.current.value = "";
    this.pwdRef.current.value = "";
    this.unameRef.current.focus();
  }
  render() {
    return (
      <div>
        <h2>ContactForm</h2>
        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="name">Name</lable>
          <br />
          <input type="text" id="name" ref={this.unameRef} />
          <br />
          <lable htmlFor="mailid">Email</lable>
          <br />
          <input type="email" id="mailid" ref={this.emailRef} />
          <br />
          <lable htmlFor="pwd">Password</lable>
          <br />
          <input type="password" id="pwd" ref={this.pwdRef} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
