import React, { Fragment } from 'react';
import './App.css';

// components
import InputTodo from './components/InputTodo';
import Listodos from './components/Listodos';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <Listodos />
      </div>

    </Fragment>
  )
}

export default App;
