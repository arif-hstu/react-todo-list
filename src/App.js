import React, { useState } from 'react';
import './App.css';

// importing componenets
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  return (
   <div className='App'>
     <header>
      <h1>Arif's Todo List</h1>
    </header>
    <Form></Form>
    <TodoList></TodoList>
   </div>
  );
}

export default App;
