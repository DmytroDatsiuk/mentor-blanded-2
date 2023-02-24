import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    email: '',
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit({ ...this.state });
    this.props.onFormClose();
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={this.onInputChange}
            value={this.state.name}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            onChange={this.onInputChange}
            value={this.state.email}
          />
        </label>
        <button type="submit"> Save contact</button>
      </form>
    );
  }
}
