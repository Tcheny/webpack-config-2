import React, { Component } from 'react';

class TodoFrom extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          onChange={this.props.handleChange}
          value={this.props.text}
        />
        <button>Add</button>
      </form>
    );
  }

}

export default TodoFrom;
