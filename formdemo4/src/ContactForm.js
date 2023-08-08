import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", useremail: "", userpwd: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, submitted: false });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(
      "You typed:\n" +
        this.state.username +
        "\n" +
        this.state.useremail +
        "\n" +
        this.state.userpwd
    );
    this.setState({ username: "", useremail: "", userpwd: "" });
  }
  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="uname">Name</label>
          <input
            type="text"
            id="uname"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <span>{this.state.username}</span>
          <br />
          <label htmlFor="uemail">Email</label>
          <input
            type="text"
            id="uemail"
            name="useremail"
            value={this.state.useremail}
            onChange={this.handleChange}
          />
          <span>{this.state.useremail}</span>
          <br />
          <label htmlFor="upwd">Password</label>
          <input
            type="password"
            id="upwd"
            name="userpwd"
            value={this.state.userpwd}
            onChange={this.handleChange}
          />
          <span>{this.state.userpwd}</span>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
