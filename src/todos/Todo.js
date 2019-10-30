import React from 'react';
import PropTypes from 'prop-types'
const styles = {
    li: {
        padding: '5px 10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '5px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    span: {
        marginRight: '3px'
    },
    span2: {
        marginLeft: '3px'
    }
    
    
}
function Todo({todo, index, onChange, del}){
    const classes = []
    if(todo.status){
        classes.push('done')
    }
    return(
        <li style={styles.li}>
           <span style={styles.span}> 
           <input 
           checked={todo.status}
           type="checkbox" 
           onChange={() => onChange(todo.title)}>
               </input>  {index + 1}</span> 
               <strong className={classes.join(' ')}>{todo.title}</strong> 
           <button onClick={() =>del(todo.title)} style={styles.span2}>&times;</button>
        </li>
    )
}

Todo.protoTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired
}
export default Todo