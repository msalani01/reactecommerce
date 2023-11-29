import React, { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const [orderNumber, setOrderNumber] = useState(null);

  const handleCheckout = (formData) => {



    const randomOrderNumber = Math.floor(Math.random() * 1000000);
    setOrderNumber(randomOrderNumber);
  };

  return (
    <div>
      {orderNumber ? (
        <div>
          <h2>¡Gracias por tu pedido!</h2>
          <p>Número de pedido: {orderNumber}</p>
        </div>
      ) : (
        <div>
          <h2>Checkout</h2>
          <CheckoutForm onSubmit={handleCheckout} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
