import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Navbar.css'
import Footer from "../Footer";
export default function Navbar() {
    return (
      <div>
        <nav className='navbarContainer'>
          <div className="row navbar">
            <div className="col-md-2">
            <Link to="/" className='navLink'>Home</Link>
            </div>
            <div className="col-md-2">
            <Link to="/category" className='navLink'>All Categories</Link>
            </div>
            <div className="col-md-2">
            <Link to="/champaign" className='navLink'>Champaign</Link>
            </div>
            <div className="col-md-2">
            <Link to="/contact" className='navLink'>Contact</Link>
            </div>
            <div className="col-md-2">
            <Link to="/policy" className='navLink'>Policy Center</Link>
            </div>
            <div className="col-md-2">
            <Link to="/seller" className='navLink'>Seller Center</Link>
            </div>
          </div>
        </nav>
        <Outlet />
        <Footer/>
      </div>
    );
  }
  