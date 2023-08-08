import React, { Component } from "react";

export default class ContactFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", submitted: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.value = "";
  }
  handleChange(e) {
    this.setState({ username: e.target.value, submitted: false });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.value = this.state.username;
    this.setState({ username: "", submitted: true });
  }
  render() {
    return (
      <div>
        <h2>ContactFrom</h2>
        <form>
          <label htmlFor="uname">Name</label>
          <input
            type="text"
            id="uname"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.submitted && <p>you typed:{this.value}</p>}
      </div>
    );
  }
}
