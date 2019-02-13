import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'


class App extends React.Component {

  constructor() {
  super();
  this.state ={
    todos: [
      {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false

      },

    {
      task:'Bake Cookies',
      id: 1528817084358,
      completed: false
      
    }
  ],
  inputValue: ''

}
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.inputValue

  });

}


addItems = e => {
  e.preventDefault();
  this.setState({
  currentList: [...this.state.currentList, {task: this.state.inputValue, id:
    Date.now(), 
    completed:
    false, 
    class: '' }],
  
    inputValue: ''

});
}

markComplete = item => {
  this.setState({
    currentList: this.state.currentList.map(i => { return i.id === item.id ? (i.completed === true ? { ...i, completed: false, class: '' } : { ...i, completed: true, class: 'complete' }) : i

    })
  })
}

removeComplete = () => {
  this.setState({
    currentList: this.state.currentList.filter(i => i.completed === false)
  })
}
render () {
return (
  <React.Fragment >
  <h2>Welcome to your Todo App!</h2>

  <TodoList
  list={this.state.currentList}
  markComplete={this.markComplete}/>


  <TodoForm
  handleChange={this.handleChange}
  inputValue={this.state.inputValue}
  addItem={this.addItem}
  removeCompleted={this.removeCompleted} />
  </React.Fragment >
);
}
}








  

      





export default App;
