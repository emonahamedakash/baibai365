import React from 'react'
import Submenu from './Submenu'
import Product from '../Product'
import './CategoriesDesign.css'

const CategoriesDesign = (props) => {
  return (
    <div className='categories'>
        <div className='row'>
            <div className='col-2'>
                <Submenu
                submenuTitle='Computers'
                />
                <Submenu 
                submenuListLink='#'
                submenuListTitle='Computer Accessories & Peripherals'
                />
                <Submenu 
                submenuListLink='#'
                submenuListTitle='Computer Components'
                />
                <Submenu 
                submenuListLink='#'
                submenuListTitle='Computers & Tablets'
                />
            </div>
            <div className='col-10'>
                <div className='products'>
                <Product 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
                <Product 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
                <Product 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
                <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoriesDesign