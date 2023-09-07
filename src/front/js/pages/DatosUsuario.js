import React, { useState, useEffect } from 'react';

const DatosUsuario = () => {
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    ciudad: '',
    correo: '',
  });

  const [userBooks, setUserBooks] = useState([]);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const datosUsuarioDesdeBackend = {
      nombre: 'Juan',
      apellido: 'Pérez',
      telefono: '123456789',
      ciudad: 'Ciudad Ejemplo',
      correo: 'juan@example.com',
    };

    const librosUsuarioDesdeBackend = [
      { id: 1, titulo: 'Libro 1' },
      { id: 2, titulo: 'Libro 2' },
      { id: 3, titulo: 'Libro 3' },
    ];

    setUserData(datosUsuarioDesdeBackend);
    setUserBooks(librosUsuarioDesdeBackend);
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Datos del Usuario</h1>
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Datos Personales</h2>
          {isEditing ? (
            <>
              <div className="mb-3">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={userData.nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido">Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  name="apellido"
                  value={userData.apellido}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  name="telefono"
                  value={userData.telefono}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ciudad">Ciudad:</label>
                <input
                  type="text"
                  className="form-control"
                  id="ciudad"
                  name="ciudad"
                  value={userData.ciudad}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="correo">Correo Electrónico:</label>
                <input
                  type="text"
                  className="form-control"
                  id="correo"
                  name="correo"
                  value={userData.correo}
                  onChange={handleInputChange}
                />
              </div>
            </>
          ) : (
            <>
              <p className="card-text"><strong>Nombre:</strong> {userData.nombre}</p>
              <p className="card-text"><strong>Apellido:</strong> {userData.apellido}</p>
              <p className="card-text"><strong>Teléfono:</strong> {userData.telefono}</p>
              <p className="card-text"><strong>Ciudad:</strong> {userData.ciudad}</p>
              <p className="card-text"><strong>Correo Electrónico:</strong> {userData.correo}</p>
            </>
          )}
          {isEditing ? (
            <button className="btn btn-primary" onClick={handleSaveClick}>Guardar</button>
          ) : (
            <button className="btn btn-primary" onClick={handleEditClick}>Editar</button>
          )}
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Libros para Intercambiar</h2>
          <ul className="list-group">
            {userBooks.map((libro) => (
              <li key={libro.id} className="list-group-item">{libro.titulo}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DatosUsuario;
