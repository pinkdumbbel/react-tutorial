import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreacte from "./components/TodoCreacte";
import { TodoContext } from "./components/TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoContext>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreacte></TodoCreacte>
      </TodoTemplate>
    </TodoContext>
  );
}

export default App;
