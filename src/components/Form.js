import React from 'react'

const form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputtexth = (e) => {
    setInputText(e.target.value);
  };
  const sumbitTodo =(e) =>{
    e.preventDefault();
    setTodos([
      ...todos, { test: inputText, completed: false, id: Math.random()*1000 }
    ]);
    setInputText("");
  }
  return (
    <div className='addItems'>
                    <input value={inputText} type="text" placeholder="✍ Add Items..." 
                      onChange={inputtexth} 
                    />
                    <i onClick={sumbitTodo} type="sumbit" className='fa fa-plus add-btn'> </i>
                </div>
  )
}

export default form