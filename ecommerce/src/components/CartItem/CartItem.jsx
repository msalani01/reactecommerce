import React from 'react';

const CartItem = ({ id, name, price, quantity, img }) => {
  return (
    <div className="CartItem">
      <img src={img} alt={name} className="ItemImg" />
      <p>{name}</p>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
    </div>
  );
}

export default CartItem;
