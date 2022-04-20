import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

export default function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__left'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFoJ0rqP-xZgMyILg0bTdW2MPgzJjCrTFL8Q&usqp=CAU'
            alt='ad-banner'
            />
            <div>
                <h2 className='checkout__title'>Your shopping Basket</h2>
            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>    
    </div>
  )
}
