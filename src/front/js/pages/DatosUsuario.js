import React, {useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const DatosUsuario = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Datos del Usuario:</h1>
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Datos Personales</h2>           
              <p className="card-text"><strong>Nombre:</strong> {store.user.name}</p>
              <p className="card-text"><strong>Apellido:</strong> {store.user.last_name}</p>
              <p className="card-text"><strong>Teléfono:</strong> {store.user.cellphone}</p>
              <p className="card-text"><strong>Ciudad:</strong> {store.user.city}</p>
              <p className="card-text"><strong>Ciudad:</strong> {store.user.country}</p>
              <p className="card-text"><strong>Correo Electrónico:</strong> {store.user.email}</p>   
            <Link to={"/edit-user"}>
              <button className="btn btn-primary">Editar</button>
            </Link>        
        </div>
      </div>
    </div>
  );
};

export default DatosUsuario;
