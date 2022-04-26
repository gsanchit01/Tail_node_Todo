import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';



function App() {
  const [inputText, setInputText] = useState('');
  const [ todos, setTodos] = useState([]);

  useEffect(()=>{
    getLocal();
    },[]);

  useEffect(()=>{
    saveLocal();
  },[todos]);
  
  
  const saveLocal = () =>{
       localStorage.setItem('todos', JSON.stringify(todos));
    };

const delall = () =>{
  setTodos([]);
};
    const getLocal = () => {
      if(localStorage.getItem("todos") ===null){
        localStorage.setItem('todos', JSON.stringify([]));
      }
      else{
       let todloc = JSON.parse(localStorage.getItem("todos"));
       setTodos(todloc);
      }
      
    };
  
  return (
    <div className="App">
      <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <figcaption> Add Your List Here ✌ </figcaption>
                    <button onClick={delall}> Clear All</button>
                </figure>
                <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
                <Todolist setTodos={setTodos} todos={todos}/>                
                </div>
            </div>
        </div>

  )}
export default App;
