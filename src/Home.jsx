import React from 'react'
import './Home.css'
import Product from './Product'
import Slider from './Slider';

export default function Home() {
  return (
    <div className='home'>
        <Slider/>
        <div className="homeRow">
            <h3>Featured Products</h3>
            <div className="row productRow">
                <div className="col-md-2">
                    <Product 
                        id='4903850'
                        title='Logitech MK270 Wireless '
                        price={44.74}
                        image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                        rating={5}
                    />
                </div>
                <div className="col-md-2">
                    <Product 
                    id='4903850'
                    title='Logitech MK270 Wireless Keyboard and Mouse'
                    price={44.74}
                    image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                    rating={5}
                    />
                </div>
                <div className="col-md-2">
                    <Product 
                    id='4903850'
                    title='Logitech MK270 Wireless Keyboard and Mouse'
                    price={44.74}
                    image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                    rating={5}
                    />
                </div>
                <div className="col-md-2">
                <Product 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
                </div>
                <div className="col-md-2">
                <Product 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
                </div>
            </div>
        </div>
        {/* <div className='home__container'>
        <Slider/>
            <div className='home__row'>
            
                <div className='listTitle'>
                <h3>Featured Products</h3>
                </div>
                <div className='productList'>
                <Product 
                    id='4903850'
                    title='Logitech MK270 Wireless '
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
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
                <button className='btn btn-outline-secondary seeMoreBtn'>See more</button>
                </div>
                
            </div>
            <div className='home__row'>
                <div className='listTitle'>
                    <h3>Grocery</h3>
                </div>
                <div className='productList'>
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
                <button className='btn btn-outline-secondary seeMoreBtn'>See more</button>
                </div>
            </div>
            <div className='home__row'>
                <div className='listTitle'>
                    <h3>Electronics</h3>
                </div>
                <div className='productList'>
                <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
            <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
            <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
            <Product 
                title='iPhone Charger'
                price={29.99}
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                rating={4}
                />
                <button className='btn btn-outline-secondary seeMoreBtn'>See more</button>
                </div>

            </div>
            
        </div> */}
    </div>
  );
}
