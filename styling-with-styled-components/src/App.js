import React, { useState } from "react";
import Button from "./components/Button";
import styled, { ThemeProvider } from "styled-components";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const attr = {
  color: {
    blue: "#228be6",
    gray: "#496057",
    pink: "#f06595",
  },
  size: {
    large: {
      height: "3rem",
      fontSize: "1rem",
    },
    medium: {
      height: "2.25rem",
      fontSize: "1rem",
    },
    small: {
      height: "1.75rem",
      fontSize: "0.875rem",
    },
  },
};

function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };
  return (
    <ThemeProvider theme={{ attr }}>
      <AppBlock>
        <Button size="large" color="pink" onClick={onClick}>
          BUTTON
        </Button>

        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          정말로 삭제 하시겠습니까?
        </Dialog>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
