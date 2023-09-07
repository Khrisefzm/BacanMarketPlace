import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const EditUser = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: store.user.name || "",
    last_name: store.user.last_name || "",
    cellphone: store.user.cellphone || "",
    city: store.user.city || "",
    country: store.user.country || "",
    email: store.user.email || "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSaveClick = () => {
    actions.editUser(form);
    navigate("/datosusuario")
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Datos del Usuario:</h1>
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Datos Personales</h2>
          <div className="mb-3">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              name="last_name"
              value={form.last_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              name="cellphone"
              value={form.cellphone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ciudad">Ciudad:</label>
            <input
              type="text"
              className="form-control"
              id="ciudad"
              name="city"
              value={form.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ciudad">País:</label>
            <input
              type="text"
              className="form-control"
              id="ciudad"
              name="country"
              value={form.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="text"
              className="form-control"
              id="correo"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSaveClick}>Guardar</button>
        </div>
      </div>
    </div>
  );
};