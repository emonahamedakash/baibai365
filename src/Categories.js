import React from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import './Categories.css'
import CategoriesDesign from './categories/CategoriesDesign'
import Electronics from './categories/Electronics'
const Categories = () => {
  return (
    <div>
        <div className='row justify-content-md-center'>
        <div className='col-2 categoryCard'>
            <a href="/electronics" className='categoryLink'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/52e3aff0b20ad632.png?q=100' alt='categoryLogo'/>
                <h3>Electronics</h3>
            </a>
        </div>
        <div className='col-2 categoryCard'>
            <a className='categoryLink' href='#'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/19b17ff8cf6d89b6.png?q=100' alt='categoryLogo'/>
                <h3>Mobile</h3>
            </a>
        </div>
        <div className='col-2 categoryCard'>
            <a className='categoryLink' href='#'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/07a6a78f185d549a.png?q=100' alt='categoryLogo'/>
                <h3>Grocery</h3>
            </a>
        </div>
        <div className='col-2 categoryCard'>
            <a className='categoryLink' href='#'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/13e8cd793e692f23.png?q=100' alt='categoryLogo'/>
                <h3>Beauty</h3>
            </a>
        </div>
        <div className='col-2 categoryCard'>
            <a className='categoryLink' href='#'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/6ec8de1d47fc9ec9.png?q=100' alt='categoryLogo'/>
                <h3>Fashion</h3>
            </a>    
        </div>
        <div className='col-2 categoryCard'>
            <a className='categoryLink' href='#'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100' alt='categoryLogo'/>
                <h3>Home</h3>
            </a>    
        </div>
    </div>
    </div>
  )
}
export default Categories;