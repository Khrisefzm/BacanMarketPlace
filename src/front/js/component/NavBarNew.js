import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavBarNew = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const logout = () =>{
        actions.logout();
        navigate("/");
    };

    useEffect(() => {
        actions.seeUser();
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link to="/marketplace" className="navbar-brand">
                    <img src="https://i.imgur.com/SnqqdyB.png" alt="Logo" width="150" height="90" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/paymentpage" className="nav-link">
                                <button className="btn btn-warning">Donar</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add-product" className="nav-link">
                                <button className="btn btn-outline-warning">Intercambiar</button>
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="dropdown me-1">
                            <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                {`Hola! ${store.user.name}`}
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Perfil</button></li>
                                <li><button className="dropdown-item" type="button" onClick={()=>navigate("/history")}>Historial</button></li>
                                <li><button className="dropdown-item" type="button" onClick={()=>logout()}>Cerrar Sesión</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
