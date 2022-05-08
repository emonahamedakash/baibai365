import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Account from "./Account";
import Categories from "./Categories";
import Cashback from "./Cashback";
import Wishlist from "./Wishlist";
import Tsunami from "./Tsunami";
import Cyclone from "./Cyclone";
import Contact from "./Contact";
import Updates from "./Updates";
import Policy from "./Policy";
import Seller from "./Seller";
import Productdetails from "./Productdetails";
import Footer from "./Footer";
import Electronics from "./categories/Electronics";

function App() {
  return (
   <div className="app">
<Header/>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            
              <Route index element={<Home />} />
              <Route path="categories" element={<Categories />} />
              <Route path="tsunami" element={<Tsunami />} />
              <Route path="cyclone" element={<Cyclone />} />
              <Route path="cashback" element={<Cashback />} />
              <Route path="contact" element={<Contact />} />
              <Route path="updates" element={<Updates />} />
              <Route path="policy" element={<Policy />} />
              <Route path="seller" element={<Seller />} />
              <Route path="productdetails" element={<Productdetails />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="account" element={<Account />} />
              <Route path="electronics" element={<Electronics />} />
            </Route>
        </Routes> 
        
      </BrowserRouter>
      
   </div>
  );
}

export default App

function Layout() {
  return (
    <div>
      <nav className='header-container'>
        <ul className='navbar'>
          <li className='navList'>
            <Link to="/" className='navLink'>Home</Link>
          </li>
          <li className='navList'>
            <Link to="/categories" className='navLink'>All Categories</Link>
          </li>
          <li className='navList'>
            <Link to="/electronics" className='navLink'>Electronics</Link>
          </li>
          <li className='navList'>
            <Link to="/tsunami" className='navLink'>Tsunami</Link>
          </li>
          <li className='navList'>
            <Link to="/cyclone" className='navLink'>Cyclone</Link>
          </li>
          <li className='navList'>
            <Link to="/cashback" className='navLink'>Cashback</Link>
          </li>
          <li className='navList'>
            <Link to="/contact" className='navLink'>Contact</Link>
          </li>
          <li className='navList'>
            <Link to="/updates" className='navLink'>Updates</Link>
          </li>
          <li className='navList'>
            <Link to="/policy" className='navLink'>Policy Center</Link>
          </li>
          <li className='navList'>
            <Link to="/seller" className='navLink'>Seller Center</Link>
          </li>
          <li className='navList'>
            <Link to="/checkout" className='navLink'>Checkout</Link>
          </li>
          <li className='navList'>
            <Link to="/account" className='navLink'>Account</Link>
          </li>
          
        </ul>
      </nav>
      <Outlet />
      <Footer/>
    </div>
  );
}
