import React from "react";
import './App.css';

class App extends React.Component {

constructor() {
  super();
  this.state = { 
    todos: [
      {id :0, 
      task :"eat", 
      done: false},
      {id :1, 
      task :"sleep", 
      done: false}], 
      text:"",
  }
} 
handleAdd=()=>this.setState({todos:[...this.state.todos, {id: Math.random(), 
  task: this.state.text, done: false}],})
handleRemove=(id)=>this.setState({todos: this.state.todos.filter(el=>el.id!==id)})
handleDone=(id)=>this.setState({todos: this.state.todos.map(el=>el.id===id?
  {...el, done: !el.done}:el)})
render() { console.log (this.state.todos)
  return (
    <div className="App">
      <input 
      type="text" 
      value={this.state.text} 
      onChange={(event)=> this.setState ({text: event.target.value})}></input>
      <button onClick={this.handleAdd}>Add</button>
      {this.state.todos.map(el =>
    <div>
      <h1 style= {{textDecoration: el.done? "line-through" : null}}>{el.task}</h1>
      <button onClick={()=>this.handleRemove(el.id)}>Remove</button> 
      <button onClick={()=>this.handleDone(el.id)}>Done</button>
    </div>
    )}
    </div>
  );
}
}
export default App;
