import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "./Navbar.jsx";
import { NavBarNew } from "./NavBarNew";

export const GeneralNavbar = () => {
    const { store } = useContext(Context);

    return (
        <>
            {
                store.token && store.token !== "" && store.token !== undefined ?
                    <NavBarNew /> :
                    <Navbar />
            }
        </>
    );
};

