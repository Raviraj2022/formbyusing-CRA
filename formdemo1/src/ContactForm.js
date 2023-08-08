import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ username: e.target.value });
  }
  render() {
    return (
      <div>
        <h2>ContactForm</h2>
        <form>
          <label htmlFor="uname">Name</label>
          <input
            type="text"
            id="uname"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
        <p>
          you typed :<b>{this.state.username}</b>
        </p>
      </div>
    );
  }
}
