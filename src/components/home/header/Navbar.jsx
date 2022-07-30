import React, { useState, useEffect} from "react"
import { Link, Outlet } from "react-router-dom"
import axios from "axios"
import './Navbar.css'
import { BASE_URL } from "../../../baseUrl"
import {FaAlignJustify, FaAngleRight} from 'react-icons/fa'


export default function Navbar() {
  const [manufacturers, setManufacturers] = useState([]);
  const [stores, setStore] = useState([]);
  useEffect( () => {
      fetchManufacturers().then();
  }, []);
  useEffect( () => {
      fetchStore().then();
  }, []);

  const fetchManufacturers = async ()=> {
      await axios.get(`${BASE_URL}/api/v1/manufacturer/list/all`, {
          params: {
            "access_token": localStorage.getItem("accessToken")
          }
      }).then((response) => {
          let temp = [];
          response.data.data.forEach((item) => {
              temp.push(item);
          })
          setManufacturers(temp);
      });
    }
  const fetchStore = async ()=> {
      await axios.get(`${BASE_URL}/api/v1/store/list/all`, {
          params: {
            "access_token": localStorage.getItem("accessToken")
          }
      }).then((response) => {
          let temp = [];
          response.data.data.forEach((item) => {
              temp.push(item);
          })
          setStore(temp);
      });
    }
    return (
      <div>
        {/* <nav classNameName='navbarContainer'>
          <div classNameName="row navbar">
            <div classNameName="col-md-2">
            <Link to="/" classNameName='navLink'>Home</Link>
            </div>
            <div classNameName="col-md-2">
            <Link to="/category" classNameName='navLink'>All Categories</Link>
            </div>
            <div classNameName="col-md-2">
            <Link to="/champaign" classNameName='navLink'>Campaign</Link>
            </div>
            <div classNameName="col-md-2">
            <Link to="/contact" classNameName='navLink'>Contact</Link>
            </div>
            <div classNameName="col-md-2">
            <Link to="/policy" classNameName='navLink'>Policy Center</Link>
            </div>
            <div classNameName="col-md-2">
            <Link to="/seller" classNameName='navLink'>Seller Center</Link>
            </div>
          </div>
        </nav>
        <Outlet /> */}
        <nav className="navbar-expand-lg bg-light p-0 container-fluid">
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className='navbarIcon'>{<FaAlignJustify/>}</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav navbar">
                <li className="nav-item">
                  <Link className="nav-link active navLink" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLink" to="allcategory">All Category</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle navLink" to="seller" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Brands
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    { 
                      manufacturers.map((manufacturer) => (
                      <li><Link className="dropdown-item" to={`manufacturer/${manufacturer.id}`}>{manufacturer.name}</Link></li>
                    ))
                    }
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="">See all</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLink" to="campaign">Campaign</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navLink" to="allstore">All Store</Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle navLink" to="seller" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shops
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    { stores.map((store) =>(
                      <li><Link className="dropdown-item" to="/vendorregistration">{store.name}</Link></li>
                    ))}
                    
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/allshop">See all</Link></li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link navLink" to="contact">Contact</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle navLink" to="seller" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Policy Center
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link className="dropdown-item" to="requirements-info">Guest Account Info    <i><FaAngleRight/></i></Link></li>
                    <li><Link className="dropdown-item" to="requirements-info">Seller Account Info <i><FaAngleRight/></i></Link></li>
                    <li><Link className="dropdown-item" to="login">Feedback & Review</Link></li>
                    <li><Link className="dropdown-item" to="login">Offer Descriptions & Rule <i><FaAngleRight/></i></Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle navLink" to="seller" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Seller Center
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="http://52.199.215.23:3001/" target='_blank'>Vendor Registration</a></li>
                    <li><Link className="dropdown-item" to="login">Store Manager</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet/>
      </div>
    );
  }
