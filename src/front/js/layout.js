import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Password } from "./pages/password.jsx"
import { Login } from "./pages/login.jsx"
import { Registro } from "./pages/registro.jsx"
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { GeneralNavbar } from "./component/GeneralNavbar.jsx";
import { Footer } from "./component/footer";
import { ProductPage } from "./pages/productPage.js";
import { CheckOut } from "./pages/CheckOut.jsx";
import { AddProductForm } from "./pages/AddProductForm.jsx";
import { ExchangeProductos } from "./pages/ExchangeProducts.jsx";
import { ComfirmExchange } from "./pages/ComfirmExchange.jsx";
import EcommerceMain from "./pages/EcommerceMain";
import ContactPage from "./pages/ContactPage";
import PaymentPage from "./pages/PaymentPage";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <GeneralNavbar/>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Password />} path="/password" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Registro />} path="/registro" />
                        {/* <Route element={<Single />} path="/single/:theid" /> */}
                        <Route element={<ProductPage />} path="/product" />
                        <Route element={<CheckOut />} path="/checkout" />
                        <Route element={<ExchangeProductos />} path="/exchange" />
                        <Route element={<ComfirmExchange />} path="/comfirm-exchange" />
                        <Route element={<AddProductForm />} path="/add-product" />
                        <Route element={<EcommerceMain />} path="/marketplace" />
                        <Route element={<ContactPage />} path="/contactpage" />
                        <Route element={<PaymentPage />} path="/paymentpage" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);