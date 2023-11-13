import React from 'react';
import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = ({ id, name, img, price, quantity }) => {
  return (
    <div>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
        <picture>
            <img src={img} alt={name} className="ItemImg" />
        </picture>
    </div>
  );
};

export default CartItem;
