import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
export default function Product(props) {
    return (
    <div className='product'>
        <Link to="/productdetails">
            <img src={props.image} className='productCardImage'/>
        </Link>
        <div>
            <p className='productTitle'>{props.title}</p>
            <p>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className='product__rating'>

            </div>
        </div>
        <button onClick=''>Add to Cart</button>
    </div>
  )
}
