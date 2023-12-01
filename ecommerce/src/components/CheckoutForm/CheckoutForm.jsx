import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Services/Firebase/firebaseConfig';
import './CheckoutForm.css'
const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    repeatEmail: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (formData.email !== formData.repeatEmail) {
      alert('Los correos electrónicos no coinciden');
      return;
    }

    const orderData = {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), orderData);
      console.log('Orden creada con ID:', docRef.id);


      onSubmit(formData); 

    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Apellido:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        E-mail:
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Repetir E-mail:
        <input type="text" name="repeatEmail" value={formData.repeatEmail} onChange={handleChange} />
      </label>
      <label>
        Teléfono:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <label>
        Dirección:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <button type="submit">Realizar Pedido</button>
    </form>
  );
};

export default CheckoutForm;
