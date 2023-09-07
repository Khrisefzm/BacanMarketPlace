import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";


const PaymentPage = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    amount: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de procesamiento de pago
    let response= actions.payment(formData);
  
        setTimeout(() => {
          navigate('/marketplace');
        }, 2000);
      }
    

  return (
    <div className="container mt-5">
      <h1>Realiza tu Donación</h1>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre en la Tarjeta
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">
                Número de Tarjeta
              </label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expiration" className="form-label">
                Fecha de Expiración
              </label>
              <input
                type="text"
                className="form-control"
                id="expiration"
                name="expiration"
                value={formData.expiration}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Monto de Donación (Dolares)
              </label>
              <input
                type="text"
                className="form-control"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Pagar
            </button>
          </form>
        </div>
        <div className="col-md-6">
          {/* Resumen del Pago */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resumen de la Doación</h5>
              <p className="card-text">
                <strong>Nombre en la Tarjeta:</strong> {formData.name}
              </p>
              <p className="card-text">
                <strong>Número de Tarjeta:</strong> {formData.cardNumber}
              </p>
              <p className="card-text">
                <strong>Fecha de Expiración:</strong> {formData.expiration}
              </p>
              <p className="card-text">
                <strong>Monto de Donación:</strong> ${formData.amount}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
