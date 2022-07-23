import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Profile from "./components/pages/Profile";
import Wishlist from "./components/cart/Wishlist";
import Checkout from './components/cart/Checkout';
import AllCategory from "./components/category/AllCategory";
import ProductDetails from "./components/pages/ProductDetails";
import Campaign from "./components/campaign/Campaign";
import Contact from "./components/others/Contact";
import Policy from "./components/policycenter/Policy";
import Seller from "./components/vendor/Seller";
import Category from "./components/pages/Category";
import Home from "./components/pages/Home";
import Navbar from './components/home/header/Navbar'
import Footer from "./components/home/footer/Footer";
import VendorRegister from "./components/vendor/VendorRegister";
import Requirements from "./components/policycenter/guest/Requirements";
import Terms from "./components/account/Terms";
import Header from "./components/home/header/Header";
import PublicOutlet from "./PublicOutlet";
import PrivateOutlet from "./PrivateOutlet";
import EditProfile from "./components/account/EditProfile";
import Cart from "./components/cart/Cart";
import Error from "./components/pages/Error";

function App() {
  let id;
  return (
   <div className="app">
          <Header/>
          <Routes>
            <Route path="/login" element={<PublicOutlet/>}>
                <Route path="/login" element={<Login />} />

            </Route>
                <Route path="/secure" element={<PrivateOutlet/>}>
                <Route path="/secure/checkout" element={<Checkout />} />
                <Route path="/secure/register" element={<Register />} />
                <Route path="/secure/profile" element={<Profile />} />
                <Route path="/secure/profile/editprofile" element={<EditProfile />} />

            </Route>

          </Routes>

          {/*Header Link Routes*/}
          {/*<---Header Link Routs End--->*/}

          {/*Navbar Link routes*/}
          <Routes>
              <Route path="/" element={<Navbar />}>
                  <Route index element={<Home/>}/>
                  <Route path="allcategory" element={<AllCategory />} />
                  <Route path="products/productdetails" element={<ProductDetails />} />
                  <Route path="campaign" element={<Campaign/>} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="policy" element={<Policy />} />
                  <Route path="seller" element={<Seller />} />
              </Route>
          </Routes>
          {/*<---Navbar Link Routs End--->*/} 
          {/*Other Link Routs*/}
          <Routes>
            <Route path="allcategory/category" element={<Category />} />
            <Route path="vendor-register" element={<VendorRegister />} />
            <Route path="requirements-info" element={<Requirements />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="error" element={<Error/>} />
          </Routes>
          {/*<---Other Link Routs End--->*/}
          <Footer/>
   </div>
  );
}

export default App

