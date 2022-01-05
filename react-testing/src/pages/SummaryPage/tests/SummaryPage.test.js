import { render, screen } from '@testing-library/react';
import SummaryPage from '../SummaryPage';

test('체크박스 버튼', () => {
  render(<SummaryPage />);

  const checkBox = screen.getByRole('checkbox', {
    name: '주문하려는 것을 확인하셨나요?',
  });

  expect(checkBox.checked).toEqual(false);
});
