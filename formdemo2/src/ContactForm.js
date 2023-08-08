import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ username: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("you typed:" + this.state.username);
    this.setState({ username: "" });
  }
  render() {
    return (
      <div>
        <h2>ContactForm</h2>
        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="uname">Name</lable>
          <input
            type="text"
            id="uname"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
