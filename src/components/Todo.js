import React from 'react'

const Todo = ({ text, todo ,setTodos, todos}  ) => {
    const delh = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const comph = () => {
        setTodos(todos.map((item) =>{
            if(item.id === todo.id){
            return{
                ...item, completed: !item.completed
                
            };
        }
            return item;
        
        })
        );
    };
  return (
    <div className={`eachItem ${todo.completed ? "completed1" :""}`}>
        <h3 className={`todo-item ${todo.completed ? "completed" :""}`}>{text}</h3>
        <div>
        <i onClick={comph} className="fa fa-check ml" aria-hidden="true"></i>
        <i onClick={delh} className="fa fa-trash" aria-hidden="true"></i>
        </div>
    </div>
  )
}

export default Todo
