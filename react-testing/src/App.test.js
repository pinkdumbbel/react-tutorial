import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  //screen object를 이용해서 원하는 엘리먼트에 접근
  const counterEl = screen.getByTestId('counter');
  //counter의 텍스트가 0 인지 확인
  expect(counterEl).toHaveTextContent(0);
});

test('plus button has correct text', () => {
  render(<App />);
  const plusEl = screen.getByTestId('plusBtn');
  expect(plusEl).toHaveTextContent('+');
});

test('miuns button has correct text', () => {
  render(<App />);
  const minusEl = screen.getByTestId('minusBtn');
  expect(minusEl).toHaveTextContent('-');
});

test('플러스 버튼이 눌렸을때 카운터가 1로 바뀌는지', () => {
  render(<App />);
  const plusEl = screen.getByTestId('plusBtn');
  fireEvent.click(plusEl);

  const counterEl = screen.getByTestId('counter');
  expect(counterEl).toHaveTextContent(1);
});

test('마이너스 버튼이 눌렸을때 카운터가 -1로 바뀌는지', () => {
  render(<App />);
  const minusEl = screen.getByTestId('minusBtn');
  fireEvent.click(minusEl);

  const counterEl = screen.getByTestId('counter');
  expect(counterEl).toHaveTextContent(-1);
});
