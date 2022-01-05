import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mockserver/server';
import Type from '../Type';

test('이미지 보기', async () => {
  render(<Type orderType="products" />);

  const productImages = await screen.findAllByRole('img', {
    name: /product$/i,
  });

  expect(productImages).toHaveLength(2);

  const altText = productImages.map((img) => img.alt);
  expect(altText).toEqual(['America product', 'England product']);
});

test('옵션 페칭', async () => {
  render(<Type orderType="options" />);

  const optionChkBoxes = await screen.findAllByRole('checkbox');

  expect(optionChkBoxes).toHaveLength(2);
});

test('api 호출 에러', async () => {
  server.resetHandlers(
    rest.get('http://localhost:8080/products', (_, res, ctx) => {
      res(ctx.status(500));
    }),
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId('error-banner');
  expect(errorBanner).toHaveTextContent('에러가 발생했습니다.');
});
