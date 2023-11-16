import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    // Otros campos que puedas necesitar
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        E-mail:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      {/* Otros campos del formulario */}
      <button type="submit">Realizar Pedido</button>
    </form>
  );
};

export default CheckoutForm;
