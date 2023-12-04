import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(product => (
        <CartItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className='Button'>Limpiar carrito</button>
      <Link to='/checkout' className='Option'>Checkout</Link>
    </div>
  );
};

export default Cart;
