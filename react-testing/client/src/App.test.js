import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('주문완료', async () => {
  render(<App />);

  const americaInput = await screen.findByRole('spinbutton', {
    name: 'America',
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, '2');

  const englandInput = await screen.findByRole('spinbutton', {
    name: 'England',
  });
  userEvent.clear(englandInput);
  userEvent.type(englandInput, '3');

  const insuranceCheckBox = await screen.findByRole('checkbox', {
    name: 'Insurance',
  });
  userEvent.click(insuranceCheckBox);

  const orderButton = screen.getByRole('button', {
    name: '주문하기',
  });
  userEvent.click(orderButton);
});
