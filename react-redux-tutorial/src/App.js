import React from 'react';
import CounterContainer from './Containers/CounterContainer';
import Todos from './components/Todos';
import TodosContainer from './Containers/TodosContainer';

function App() {
  return (
    <>
      <CounterContainer />
      <hr></hr>
      <TodosContainer />
    </>
  );
}

export default App;
