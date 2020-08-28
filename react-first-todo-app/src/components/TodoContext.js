import React, { useReducer, createContext, useContext } from "react";

//true = 작업완료
//false = 작업미완료
const initialTodos = {
  tasks: [
    {
      id: 1,
      done: true,
      list: "프로젝트 생성하기",
    },
    {
      id: 2,
      done: true,
      list: "컴포넌트 스타일링 하기",
    },
    {
      id: 3,
      done: false,
      list: "Context 만들기",
    },
    {
      id: 4,
      done: false,
      list: "기능 구현하기",
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    /* case "CHANGE":
      return {
        ...state,
        inputs: {
          [action.name]: action.value,
        },
      };
      */
    case "CREATE":
      return {
        ...state,
        tasks: state.tasks.concat(action.todo),
      };
    case "COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, done: !task.done } : task
        ),
      };
    case "REMOVE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    default:
      return null;
  }
}

const TodoDispatchContext = createContext();
const TodoStateContext = createContext();

export function TodoContext({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={todos}>
        {children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoState() {
  return useContext(TodoStateContext);
}
