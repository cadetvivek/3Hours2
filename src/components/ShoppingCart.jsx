import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  const getTotalPrice = () => {
    let totalPrice = 0;

    for (const product of cart) {
      totalPrice +=
        product.price *
        (product.quantity.small + product.quantity.medium + product.quantity.large);
    }

    return totalPrice;
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price.toFixed(2)} | Total: $
            {(product.price *
              (product.quantity.small +
                product.quantity.medium +
                product.quantity.large)
            ).toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default ShoppingCart;
