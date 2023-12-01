import React, { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const handleOrderSubmit = (formData) => {
 
    console.log('Datos de la orden: ', formData);


  };

  return (
    <div>
    
      <CheckoutForm onSubmit={handleOrderSubmit} />
    </div>
  );
};

export default Checkout;