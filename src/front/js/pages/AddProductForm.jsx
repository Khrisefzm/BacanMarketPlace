import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AddProductForm = () => {

    const {store, actions} = useContext(Context);

    const [formInfo, setFormInfo] = useState({
        name: "",
        product_state: "",
        category: "",
        author: "",
        description: "",
        image: "",
        interested_product_one: "",
        interested_product_two: "",
        interested_product_three: "",
        exchange_state: "pending",
        user_id: store.user.id
    })

    const handleFileChange = e => {
        const selectedFile = e.target.files[0];
        let base64 = "";
        const name = e.target.name;
        if (selectedFile) {
            // Lee el archivo como un objeto Blob
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                // Convierte el archivo a base64
                base64 = reader.result;
                setFormInfo({...formInfo, [name]: base64})
            };
        }  
    };
    const handleInputChange = e => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    }

    const sentForm = e => {
        e.preventDefault();
        actions.addProduct(formInfo);
        setFormInfo({
            name: "",
            product_state: "",
            category: "",
            author: "",
            description: "",
            image: "",
            interested_product_one: "",
            interested_product_two: "",
            interested_product_three: "",
            exchange_state: "pending",
            user_id: store.user.id
        });
        e.target.reset();
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center">Añadir producto</h1>
                <form onSubmit={sentForm}>
                    {/* primera Fila */}
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-3">
                            <label className="form-label">Nombre del producto:</label>
                            <input type="text" maxLength="50" className="form-control" name="name" onChange={handleInputChange} required/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                            <label className="form-label">Estado:</label>
                            <select className="form-select" aria-label="Default select example" name="product_state" onChange={handleInputChange} required>
                                <option defaultValue>Selecciona una opción</option>
                                <option value="usado">Usado</option>
                                <option value="nuevo">Nuevo</option>
                            </select>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                            <label className="form-label">Categoría:</label>
                            <select className="form-select" aria-label="Default select example" name="category" onChange={handleInputChange} required>
                                <option defaultValue>Selecciona una opción</option>
                                <option value="autoayuda">Autoayuda</option>
                                <option value="romance">Romance</option>
                                <option value="ficción">Ficción</option>
                            </select>
                        </div>
                    </div>
                    {/* Segunda Fila */}
                    <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label className="form-label">Autor:</label>
                            <input type="text" maxLength="50" className="form-control" name="author" onChange={handleInputChange} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label className="form-label">Imagen del producto</label>
                            <input className="form-control" type="file" name="image" accept=".jpg .png" onChange={handleFileChange} required/>
                        </div>
                    </div>
                    {/* Tercera Fila */}
                    <div className="mb-3">
                        <label className="form-label">Intercambio por:</label>
                        <div className="row mb-3">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Libro 1 *:</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                               <input type="text" className="form-control" name="interested_product_one" onChange={handleInputChange} required/> 
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Libro 2:</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                               <input type="text" className="form-control" name="interested_product_two" onChange={handleInputChange} /> 
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Libro 3:</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                               <input type="text" className="form-control" name="interested_product_three" onChange={handleInputChange} /> 
                            </div>
                        </div>
                    </div>
                    {/* Cuarta Fila */}
                    <div className="mb-3">
                        <label className="form-label">Description: </label>
                        <textarea className="form-control" rows="3" name="description" onChange={handleInputChange} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success me-3">Añadir producto</button>
                    <Link to="/marketplace">
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </Link>
                </form>
            </div>
        </>
    );
};