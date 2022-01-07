import { render, screen } from '../../../test-util';
import userEvent from '@testing-library/user-event';
import { OrderContextProvider } from '../../../contexts/OrderContext';
import Type from '../Type';
import OrderPage from '../OrderPage';

test('상품 총 가격 변경', async () => {
  render(<Type orderType="products" />, { wrapper: OrderContextProvider });

  const productsTotal = screen.getByText('상품 총 가격:', { exact: false });

  expect(productsTotal).toHaveTextContent('0');

  const americaInput = await screen.findByRole('spinbutton', {
    name: 'America',
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, '1');

  expect(productsTotal).toHaveTextContent('1000');
});

test('옵션 선택시 총 금액 변경', async () => {
  render(<Type orderType="options" />);

  const optionsTotal = screen.getByText('옵션 총 가격:', { exact: false });
  expect(optionsTotal).toHaveTextContent('0');

  const insuranceCheckBox = await screen.findByRole('checkbox', {
    name: 'Insurance',
  });

  userEvent.click(insuranceCheckBox);
  expect(optionsTotal).toHaveTextContent('500');

  const dinnerCheckBox = await screen.findByRole('checkbox', {
    name: 'Dinner',
  });
  userEvent.click(dinnerCheckBox);
  expect(optionsTotal).toHaveTextContent('1000');

  userEvent.click(dinnerCheckBox);
  expect(optionsTotal).toHaveTextContent('500');
});

describe('상품, 옵션선택시 총가격', () => {
  test('총가격 0 시작 및 상품 한개 선택시 총 가격 변경', async () => {
    render(<OrderPage />);

    const total = screen.getByText('Total Price:', { exact: false });
    expect(total).toHaveTextContent('0');

    const americaInput = await screen.findByRole('spinbutton', {
      name: 'America',
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, '1');

    expect(total).toHaveTextContent('1000');
  });

  test('총가격 0 시작 및 옵션 한개 선택시 총 가격 변경', async () => {
    render(<OrderPage />);

    const total = screen.getByText('Total Price:', { exact: false });
    expect(total).toHaveTextContent('0');

    const insuranceChk = await screen.findByRole('checkbox', {
      name: 'Insurance',
    });
    userEvent.click(insuranceChk);
    expect(total).toHaveTextContent('500');
  });

  test('옵션 및 상품 체크 해제시 가격 총가격 초기화', async () => {
    render(<OrderPage />);

    const total = screen.getByText('Total Price:', { exact: false });
    expect(total).toHaveTextContent('0');

    const insuranceChk = await screen.findByRole('checkbox', {
      name: 'Insurance',
    });
    userEvent.click(insuranceChk);

    const americaInput = await screen.findByRole('spinbutton', {
      name: 'America',
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, '3');

    userEvent.clear(americaInput);
    userEvent.type(americaInput, '1');

    expect(total).toHaveTextContent('1500');
  });
});
