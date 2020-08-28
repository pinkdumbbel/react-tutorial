import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodosContainer from './container/TodosContainer';

const GlobalStyle = createGlobalStyle`
  html,body {
    width: 100%;
    height: 100%;
    background: #e9ecef;
    margin:0;
    padding:0;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <TodosContainer />
    </>
  );
}

export default App;
