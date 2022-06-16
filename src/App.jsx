import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Header from "./header/Header";
import Login from "./account/Login";
import Profile from "./account/Profile";
import Wishlist from "./Wishlist";
import Checkout from './Checkout';
import Navbar from "./header/Navbar"
import AllCategory from "./category/AllCategory";
import Productdetails from "./Productdetails";
import Champaign from "./champaign/Champaign";
import Contact from "./Contact";
import Policy from "./Policy";
import Seller from "./Seller";
import Electronics from "./category/Electronics";
import Home from "./Home";


function App() {
  return (
   <div className="app">
<Header/> 
          {/*Header Link Routes*/}
          <Routes>
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
          {/*<---Header Link Routs End--->*/}

          {/*Navbar Link routes*/}
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="category" element={<AllCategory />} />
              <Route path="productdetails" element={<Productdetails />} />
              <Route path="champaign" element={<Champaign/>} />
              <Route path="contact" element={<Contact />} />
              <Route path="policy" element={<Policy />} />
              <Route path="seller" element={<Seller />} />
            </Route>
          </Routes>
          {/*<---Navbar Link Routs End--->*/} 
          {/*Other Link Routs*/}
          <Routes>
            <Route path="electronics" element={<Electronics />} />
          </Routes>
          {/*<---Other Link Routs End--->*/}
   </div>
  );
}

export default App

