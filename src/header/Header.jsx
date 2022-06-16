import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import  {FaSearch, FaShoppingBag, FaUserCircle, FaCreativeCommonsNcJp, FaRegHeart } from 'react-icons/fa'

export default function Header() {
    return (
    <div className='row header'>
        <div className='col-md-2'>
            <Link to="/">
                <img className='headerLogo' src='https://baibai365.com/wp-content/uploads/2022/02/cropped-Hotel-360.png' alt='logo'/>
            </Link>
        </div>
        <div className='col-md-8 headerSearch'>
            <input type='text' className='headerSearchInput'/>
            <div className='headerSearchIcon'>
                <FaSearch/>

            </div>
        </div>
        <div className='col-md-2'>
            <Link to="/login" className='headerLink' title='Log in'>
                <FaUserCircle className='headerIcon'/>
            </Link>
            <Link to="/wallet" className='headerLink' title='Wallet'>
                <FaCreativeCommonsNcJp className='headerIcon'/>
            </Link>
            <Link to="/wishlist" className='headerLink' title='Wishlist'>
                <FaRegHeart className='headerIcon'/>
            </Link>
            
            <Link to="/checkout" className='headerLink' title='Cart'>
                <FaShoppingBag className='headerIcon'/>
            </Link>
        </div>
    </div>
  );
}
