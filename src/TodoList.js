import React, { Component } from 'react';

class TodoList extends Component {

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={()=>this.props.handleRemove(index)}>x</button>
          </li>
        ))}
      </ul>
    );
  }

}

export default TodoList;
