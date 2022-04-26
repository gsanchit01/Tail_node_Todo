import React from 'react'
import Todo from './Todo'
const Todolist = ({ todos, setTodos }) => {
    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    }    
    todos.sort(GetSortOrder("completed"));
  return (
    <div className='showItems'>
               {todos.map((todo) => (
                   <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.test}/>
                
                   

               ))};
               
                
                  </div>    
  )
}

export default Todolist