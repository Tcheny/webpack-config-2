import React, { Component } from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
      items: [],
      text: '' 
    };
  }

    handleChange=(e)=> {
      this.setState({ text: e.target.value });
    }

    handleSubmit=(e)=> {
      e.preventDefault();

      this.setState({
        items: [... this.state.items, this.state.text],
        text: ''
      })
    }

    handleRemove=(index)=>{
      this.state.items.splice(index, 1)
      this.forceUpdate();
    }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} text={this.state.text} />
        <TodoList items={this.state.items} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
