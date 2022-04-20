import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'/>

            <div className='home__row'>
                <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
                <Product 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
                
            </div>
            <div className='home__row'>
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
                <Product 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
            </div>
            <div className='home__row'>
            <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
            </div>
        </div>
    </div>
  )
}
