import React, { useState } from "react";

export const AddProductForm = () => {

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
    })

    const [base64, setBase64] = useState("");

    const handleFileChange = e => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Lee el archivo como un objeto Blob
            const reader = new FileReader();
            reader.onloadend = () => {
                // Convierte el archivo a base64
                setBase64(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
        console.log(base64)
        setFormInfo({...formInfo, [e.target.name]: base64})
    };

    const handleInputChange = e => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    }
    console.log(formInfo)

    return (
        <>
            <div className="container">
                <h1 className="text-center">Añadir producto</h1>
                <form>
                    {/* primera Fila */}
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-3">
                            <label className="form-label">Nombre del producto:</label>
                            <input type="text" maxLength="50" className="form-control" name="name" onChange={handleInputChange}/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                            <label className="form-label">Estado:</label>
                            <select className="form-select" aria-label="Default select example" name="product_state" onChange={handleInputChange}>
                                <option defaultValue>Selecciona una opción</option>
                                <option value="1">Usado</option>
                                <option value="2">Nuevo</option>
                            </select>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                            <label className="form-label">Categoría:</label>
                            <select className="form-select" aria-label="Default select example" name="category" onChange={handleInputChange}>
                                <option defaultValue>Selecciona una opción</option>
                                <option value="1">Categoría 1</option>
                                <option value="2">Categoría 2</option>
                                <option value="2">Categoría 3</option>
                            </select>
                        </div>
                    </div>
                    {/* Segunda Fila */}
                    <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label className="form-label">Autor:</label>
                            <input type="text" maxLength="50" className="form-control" name="author" onChange={handleInputChange}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label className="form-label">Imagen del producto</label>
                            <input className="form-control" type="file" name="image" accept=".jpg .png" onChange={handleFileChange} />
                        </div>
                    </div>
                    {/* Tercera Fila */}
                    <div className="mb-3">
                        <label className="form-label">Intercambio por:</label>
                        <div className="row mb-3">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Libro 1 *:</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                               <input type="text" className="form-control" name="interested_product_one" onChange={handleInputChange} /> 
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
                    <button type="submit" className="btn btn-primary">Añadir producto</button>
                </form>
            </div>
        </>

    );
};