import React, { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const [orderNumber, setOrderNumber] = useState(null);

  const handleCheckout = (formData) => {
    // Aquí podrías enviar los datos del formulario a tu backend
    // para procesar el pedido y obtener un número de pedido.

    // Simulación de un número de pedido (puedes ajustar esto según tus necesidades)
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
