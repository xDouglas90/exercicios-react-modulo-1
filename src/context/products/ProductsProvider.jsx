import { useState } from 'react';
import { ProductsContext } from './ProductsContext';
import PropTypes from 'prop-types';

export const ProductsProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const isSelected = (id) =>
    selectedProducts.some((product) => product.id === id);

  const handleSelectProduct = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  return (
    <ProductsContext.Provider
      value={{
        selectedProducts,
        isSelected,
        onSelect: handleSelectProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.any,
};