import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative; /* 투두크리에이트 렌더링 시키기 위함 */

  background: white;
  border-radius: 16px;
  box-shdow: 0 0 8px rgba(0, 0, 0, 0.84);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
