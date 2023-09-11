import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { BasicModal } from "../component/BasicModal.jsx";

export const HistoryPage = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    useEffect(()=>{
        actions.seeProducts();
    },[])
    //Only the products of actual user:
    const myProducts = store.products.filter(product => product.user_id == store.user.id && product.exchange_state === "pending");
    const [filterProducts, setFilterProducts] = useState(myProducts);
    const [showModalOne, setShowModalOne] = useState(false);
    const [showModalTwo, setShowModalTwo] = useState(false);
    const [selectProduct, setSelectProduct] = useState({});
    console.log(myProducts);
    console.log(filterProducts);
//When recharge, render again:
    useEffect(() => {
        setFilterProducts(myProducts);
    }, [store.user])

    const handleClose = () => {
        setShowModalOne(false);
        setShowModalTwo(false);
    }
    const modalButton = (num, product) => {
        setSelectProduct(product);
        if (num == 1) {
            setShowModalOne(true);
        } else {
            setShowModalTwo(true);
        }
    }

    const exchangeDone = (id) => {
        const obj = { exchange_state: "done" };
        actions.editProduct(id, obj);
        actions.seeProducts();
        if (id) {
            let newFilterProducts = filterProducts.filter(product => product.user_id == store.user.id && product.exchange_state === "pending" && product.id != id);
            setFilterProducts(newFilterProducts);
            actions.seeProducts();
        }
        handleClose();
    }

    const deleteProduct = (id) => {
        actions.seeProducts();
        if (id) {
            let newFilterProducts = filterProducts.filter(product => product.user_id == store.user.id && product.exchange_state === "pending" && product.id != id);
            setFilterProducts(newFilterProducts);
            actions.seeProducts();
        }
        actions.deleteProduct(id);
        actions.seeProducts();
        handleClose();
    }

    return (
        <div className="container tab-pane" title="myProducts">
            <h1>Mis libros para intercambio</h1>
            {
                (filterProducts && filterProducts != []) ?
                    filterProducts.map((product, key) => {
                        return (
                            <div className="row border p-2" key={product.id}>
                                <div className="col">
                                    <Link to={`/product-info/${product.id}`}>
                                        <h3>{product.name}</h3>
                                    </Link>
                                    <div className="d-inline-flex">
                                        <p>Pido: </p>
                                        <p>{`${product.interested_product_one}, ${product.interested_product_two}, ${product.interested_product_three}`}</p>
                                    </div>
                                </div>
                                {/* Edit button */}
                                <button className="col-1 btn" onClick={() => { navigate("/edit-product/" + product.id) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                </button>
                                {/* Check button */}
                                <button className="col-1 btn" onClick={() => modalButton(1, product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                </button>
                                {/* Delete button */}
                                <button className="col-1 btn" onClick={() => modalButton(2, product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </button>
                            </div>
                        );
                    }) :
                    <>
                        <h2>Parece que aún no has intentado intercambiar un libro</h2>
                        <Link to="/add-product" className="nav-link">
                            <button className="btn btn-outline-warning">Intercambiar un libro ahora</button>
                        </Link>
                    </>
            }
            {/* Checkbutton modal */}
            <BasicModal
                title={"Intercambio realizado"}
                question={"¿Realizaste correctamente el intercambio para este producto?"}
                functionShow={showModalOne}
                funtionClose={handleClose}
                funtionOnClic={() => { exchangeDone(selectProduct.id) }}
            />
            {/* Deletebutton Modal */}
            <BasicModal
                title={"Eliminar producto"}
                question={"¿Está seguro que desea eliminar el producto?"}
                functionShow={showModalTwo}
                funtionClose={handleClose}
                funtionOnClic={() => { deleteProduct(selectProduct.id) }}
            />
        </div>
    )
};