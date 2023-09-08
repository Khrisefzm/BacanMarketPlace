import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Password } from "./pages/password.jsx"
import { ResetPassword } from "./pages/resetPassword.jsx"
import { Login } from "./pages/login.jsx"
import { Registro } from "./pages/registro.jsx"
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
import DatosUsuario from "./pages/DatosUsuario";
import { HistoryPage } from "./pages/HistoryPage.jsx";
import { ProductInfo } from "./pages/ProductInfo.jsx";
import { EditProductForm } from "./pages/EditProductForm.jsx";
import { EditUser } from "./pages/EditUser.jsx";


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
                    <GeneralNavbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        {/* <Route element={<Demo />} path="/demo" /> */}
                        <Route element={<ResetPassword />} path="/ResetPassword" />
                        <Route element={<Password />} path="/password/:token" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<ProductPage />} path="/product/:theid" />
                        <Route element={<CheckOut />} path="/checkout" />
                        <Route element={<ExchangeProductos />} path="/exchange/:theid" />
                        <Route element={<ComfirmExchange />} path="/comfirm-exchange" />
                        <Route element={<AddProductForm />} path="/add-product" />
                        <Route element={<EcommerceMain />} path="/marketplace" />
                        <Route element={<ContactPage />} path="/contactpage/:theid" />
                        <Route element={<PaymentPage />} path="/paymentpage" />
                        <Route element={<DatosUsuario />} path="/datosusuario" />
                        <Route element={<EditUser/>} path="/edit-user" />
                        <Route element={<HistoryPage />} path="/history" />
                        <Route element={<ProductInfo />} path="/product-info/:theid" />
                        <Route element={<EditProductForm />} path="/edit-product/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);