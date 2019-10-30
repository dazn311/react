import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import TodoList from './todos/TodosList';

import list from './model/todoModel';


function App() {
  const [todos, setTodos] = React.useState(list)
  

  // let stat = false

  function toggleTodo (title){
    setTodos(
     todos.map(todo => {
        if (todo.title === title) {
          todo.status = !todo.status
          console.log('todos :',todos)
        }
        return todo
      })
    )
  }

  function deleteTodo (title){
    setTodos(
     todos.filter((todo, index) => {
       if (todo.id > index){
         todo.id = index;
         console.log('todo.id > index :',todo.id)
       }
        return todo.title !== title
      }).map((todo, index) => {
        if (todo.id > index){
          todo.id = index
        }
         return todo
       })
    )
    
  }
  
  toggleTodo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    isArray: PropTypes.func
  }

  return (
    <div className="App">
     <h1>React Totos</h1>
     {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} delete={deleteTodo}></TodoList> : <p>Нет заданий</p>}
     
    </div>
  );
}

export default App;
