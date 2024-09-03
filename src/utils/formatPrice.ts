import { Price } from '../types';

export const formatPrice = (price: Price) => {
  const { amount, currencyCode } = price;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
  }).format(+amount);

  return formattedPrice;
};
