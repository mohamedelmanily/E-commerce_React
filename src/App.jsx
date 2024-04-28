import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Err from "./components/Err";
import { Router } from 'react-router';

function App() {
  return (
    <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Err />} />
          </Routes>
        </>
    </BrowserRouter>
  );
}

export default App;
