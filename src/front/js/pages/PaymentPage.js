import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import { PayPalButton } from "react-paypal-button-v2";

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

  const onSuccess = (details, data) => {
    console.log("Pago completado:", details);
    let response = actions.payment(formData);
    setTimeout(() => {
      navigate('/marketplace');
    }, 2000);
  };

  const options = {
    clientId: "AelpLuqdTAFD4NCHLay2H16WjgvUJyVQQj7-2N0hZBhCv2wh8W-I41WuboRWg5UHQBJh9qdPw9mzcrvV",
    currency: "USD",
  };

  const isAmountValid = parseFloat(formData.amount) > 0;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Realiza tu Donación</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre del Donante
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
                  <label htmlFor="amount" className="form-label">
                    Monto de Donación (Dólares)
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
                  {!isAmountValid && (
                    <div className="text-danger mt-2">
                      El monto de donación debe ser mayor a $0.
                    </div>
                  )}
                </div>
              </form>
              {isAmountValid && (
                <PayPalButton
                  options={options}
                  amount={formData.amount}
                  onSuccess={onSuccess}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
