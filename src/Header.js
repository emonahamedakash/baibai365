import React from 'react'
import './Header.css'
import  {FaSearch, FaShoppingBag} from 'react-icons/fa'
import { useStateValue } from './StateProvider'
export default function Header() {
    const [ state, dispatch] = useStateValue();
    return (
    <div className='header'>
        <img src='https://baibai365.com/wp-content/uploads/2022/02/cropped-Hotel-360.png' className='header__logo' alt='logo'/>
        <div className='header__search'>
            <input className='header__searchInput' type='text'/>
            <FaSearch className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Hello
                </span>
                <span className='header__optionLineTwo'>
                    Sign In
                </span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Return
                </span>
                <span className='header__optionLineTwo'>
                    & Orders
                </span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div>
            <div className='header__optionBasket'>
                <FaShoppingBag/>
                <span className='header__optionLIneTwo header__optionBasketCount'>
                    {basket?.length}
                </span>
            </div>
        </div>

    </div>
  )
}
