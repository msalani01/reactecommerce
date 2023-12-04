import React, { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Services/Firebase/firebaseConfig';

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);

  const handleOrderSubmit = async (formData) => {
    try {
     
      const docRef = await addDoc(collection(db, 'orders'), formData);

      
      const generatedOrderId = docRef.id;

      
      setOrderId(generatedOrderId);

      console.log('Orden creada con ID:', generatedOrderId);
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  return (
    <div>
      {orderId ? (
        <p>¡Pedido realizado con éxito! ID de orden: {orderId}</p>
      ) : (
        <CheckoutForm onSubmit={handleOrderSubmit} />
      )}
    </div>
  );
};

export default Checkout;
