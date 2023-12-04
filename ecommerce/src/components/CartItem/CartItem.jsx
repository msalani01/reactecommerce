import React from 'react';

const CartItem = ({ id, name, price, quantity }) => {
 
  const totalPrice = price * quantity;

  return (
    <div>
      <h4>{name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio unitario: ${price}</p>
      <p>Total: ${totalPrice}</p>
      {}
    </div>
  );
};

export default CartItem;
