import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}
function TodoList(props){
    return (
        <ul style={styles.ul}>
           {props.todos.map((todo, index) =>{
               return <Todo index={index} todo={todo} key={todo.id} onChange={props.onToggle} del={props.delete}></Todo>
           })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired

}
export default TodoList