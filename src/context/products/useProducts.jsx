import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';

export const useProducts = () => {
  const productsContext = useContext(ProductsContext);

  return productsContext;
};
