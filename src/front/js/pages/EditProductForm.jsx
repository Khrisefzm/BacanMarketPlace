import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditProductForm = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    // Inicializa el estado con los valores actuales del producto
    const [formInfo, setFormInfo] = useState({
        name: store.singleProduct.name || "",
        product_state: store.singleProduct.product_state || "",
        category: store.singleProduct.category || "",
        author: store.singleProduct.author || "",
        description: store.singleProduct.description || "",
        image: store.singleProduct.image || "",
        interested_product_one: store.singleProduct.interested_product_one || "",
        interested_product_two: store.singleProduct.interested_product_two || "",
        interested_product_three: store.singleProduct.interested_product_three || "",
        exchange_state: store.singleProduct.exchange_state || "",
        user_id: store.user.id
    });

    console.log(store.products);
    useEffect(() => {
        actions.singleProduct(params.theid);
    }, []);

    const product = store.singleProduct;
    const handleFileChange = e => {
        const selectedFile = e.target.files[0];
        const name = e.target.name;
        if (selectedFile) {
            // Lee el archivo como un objeto Blob
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onload = () => {
                // Convierte el archivo a base64
                const base64 = reader.result;
                setFormInfo({ ...formInfo, [name]: base64 });
            };
        } else {
            // Si no se selecciona un nuevo archivo, mantén la imagen existente
            setFormInfo({ ...formInfo, [name]: store.singleProduct.image });
        }
    };

    const handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        // Copia todos los valores actuales y actualiza solo el campo específico
        setFormInfo({ ...formInfo, [name]: value });
    };

    const sentForm = e => {
        e.preventDefault();
        actions.editProduct(product.id, formInfo);
        navigate("/product-info/" + product.id);
    };

    return (
        <>
            <div className="container">
                <h1 className="text-center">Editar producto</h1>
                <form onSubmit={sentForm}>
                    {/* Primera Fila */}
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 mb-3">
                            <label className="form-label">Nombre del producto:</label>
                            <input type="text" maxLength="50" className="form-control"
                                name="name"
                                value={formInfo.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                            <label className="form-label">Estado:</label>
                            <select className="form-select" aria-label="Default select example"
                                name="product_state"
                                value={formInfo.product_state}
                                onChange={handleInputChange}>
                                <option value="usado">Usado</option>
                                <option value="nuevo">Nuevo</option>
                            </select>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                            <label className="form-label">Categoría:</label>
                            <select className="form-select" aria-label="Default select example"
                                name="category"
                                value={formInfo.category}
                                onChange={handleInputChange}>
                                <option value="autoayuda">Autoayuda</option>
                                <option value="romance">Romance</option>
                                <option value="ficción">Ficción</option>
                            </select>
                        </div>
                    </div>
                    {/* Segunda Fila */}
                    <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label">Autor:</label>
                                <input type="text" maxLength="50" className="form-control"
                                    name="author"
                                    value={formInfo.author}
                                    onChange={handleInputChange} />
                            </div>
                            <label className="form-label">Imagen del producto</label>
                            <input className="form-control" type="file"
                                name="image"
                                accept=".jpg .png"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    {/* Tercera Fila */}
                    <div className="mb-3">
                        <label className="form-label">Intercambio por:</label>
                        <div className="row mb-3">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Libro 1 *:</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                                <input type="text" className="form-control"
                                    name="interested_product_one"
                                    value={formInfo.interested_product_one}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Libro 2:</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                                <input type="text" className="form-control"
                                    name="interested_product_two"
                                    value={formInfo.interested_product_two}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-lg-2 col-md-3 col-sm-3 col-form-label">Libro 3:</label>
                            <div className="col-lg-10 col-md-9 col-sm-9">
                                <input type="text" className="form-control"
                                    name="interested_product_three"
                                    value={formInfo.interested_product_three}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    {/* Cuarta Fila */}
                    <div className="mb-3">
                        <label className="form-label">Description: </label>
                        <textarea className="form-control" rows="3"
                            name="description"
                            value={formInfo.description}
                            onChange={handleInputChange} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success me-3">
                        Editar Producto
                    </button>
                    <Link to="/history">
                        <button type="button" className="btn btn-danger">
                            Cancelar
                        </button>
                    </Link>
                </form>
            </div>
        </>
    );
};