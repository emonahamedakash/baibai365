import React, {useState} from 'react'
import './Checkout.css'
import Header from './Header'
import Subtotal from './Subtotal'

export default function Checkout() {
      let quantity = 1;
  return (
    <div>
      <div className='checkout'>
          <div className='row'>
            <div className='col-8'>
              <div className='cartItemList'>
                <div className='cartLogo'>
                  <img src='https://internetfusion.imgix.net/1609646.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=120&h=120&dpr=1' alt='logo'/>
                </div>
                <div className='productSummery'>
                  <h5 className='title'>ADIDAS 4.0 SSNL SS TEE SHORT SLEEVE T-SHIRT</h5>
                  <p className='color'>White</p>
                  <p className='size'>Small</p>
                </div>
                <div className='quantity'>
                  <input type='number' className='w-50 p-3' placeholder='0'/>
                </div>
                <div className='price'>
                  <h3>£28.95</h3>
                  <button className='btn btn-warning'>Remove</button>
                </div>
              </div>
              <div className='cartItemList'>
                <div className='cartLogo'>
                  <img src='https://internetfusion.imgix.net/1609646.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=120&h=120&dpr=1' alt='logo'/>
                </div>
                <div className='productSummery'>
                  <h5 className='title'>ADIDAS 4.0 SSNL SS TEE SHORT SLEEVE T-SHIRT</h5>
                  <p className='color'>White</p>
                  <p className='size'>Small</p>
                </div>
                <div className='quantity'>
                  <input type='number' className='w-50 p-3' placeholder='0'/>
                </div>
                <div className='price'>
                  <h3>£28.95</h3>
                  <button className='btn btn-warning'>Remove</button>
                </div>
              </div>
              <div className='cartItemList'>
                <div className='cartLogo'>
                  <img src='https://internetfusion.imgix.net/1609646.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=120&h=120&dpr=1' alt='logo'/>
                </div>
                <div className='productSummery'>
                  <h5 className='title'>ADIDAS 4.0 SSNL SS TEE SHORT SLEEVE T-SHIRT</h5>
                  <p className='color'>White</p>
                  <p className='size'>Small</p>
                </div>
                <div className='quantity'>
                  <input type='number' className='w-50 p-3' placeholder='0'/>
                </div>
                <div className='price'>
                  <h3>£28.95</h3>
                  <button className='btn btn-warning'>Remove</button>
                </div>
              </div>
              <div className='cartItemList'>
                <div className='cartLogo'>
                  <img src='https://internetfusion.imgix.net/1609646.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=120&h=120&dpr=1' alt='logo'/>
                </div>
                <div className='productSummery'>
                  <h5 className='title'>ADIDAS 4.0 SSNL SS TEE SHORT SLEEVE T-SHIRT</h5>
                  <p className='color'>White</p>
                  <p className='size'>Small</p>
                </div>
                <div className='quantity'>
                  <input type='number' className='w-50 p-3' placeholder='0'/>
                </div>
                <div className='price'>
                  <h3>£28.95</h3>
                  <button className='btn btn-warning'>Remove</button>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='total'>
                <div className='checkoutSubtotal'>
                  <div className='row'>
                  <div className='col-9'><p>Sub-total</p></div>
                  <div className='col-2'>£68.95</div>
                  </div>
                </div>
                  <div className='checkoutTotal'>
                    <div className='row'>
                    <div className='col-9'><p>Total Cost</p></div>
                    <div className='col-2'>£68.95</div>
                  </div>
                </div>
                <button className='btn btn-primary w-100 mt-5 mb-2'>PROCEED TO CHECKOUT</button>
                <button className='btn btn-outline-success w-100'>Continue shopping</button>
              </div>
            </div>
          </div>
      </div>    
    </div>
  );
}
