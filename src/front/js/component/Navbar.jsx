import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="https://i.imgur.com/SnqqdyB.png" alt="Logo" width="150" height="90" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/registro" className="nav-link">
                                <button className="btn btn-warning">Registrarse</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <button className="btn btn-outline-warning">Iniciar Sesión</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
