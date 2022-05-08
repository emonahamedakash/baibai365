import React from 'react'
import './Productdetails.css'
import Product from './Product'

export default function Productdetails() {
  return (
      <div className='container-fluid'>
        <div className='productDetails'>
            <div className='row upperPart'>
                <div className='col-md productImage'>
                    <div className='productImages'>
                        <div className='subImage'>
                        <img className='subImageTag' src='https://baibai365.com/wp-content/uploads/2022/05/IMG_4410.jpg' alt='product'/>
                        <img className='subImageTag' src='https://baibai365.com/wp-content/uploads/2022/05/IMG_4410.jpg' alt='product'/>
                        <img className='subImageTag' src='https://baibai365.com/wp-content/uploads/2022/05/IMG_4410.jpg' alt='product'/>
                        </div>
                        <div className='mainImage'>
                        <img className='productImageTag' src='https://baibai365.com/wp-content/uploads/2022/05/IMG_4410.jpg' alt='product'/>
                        </div>
                    </div>
                    
                </div>
                    <div className='col-md productSummery'>
                        <div className='productTitle'>
                            <h3>iPhone 11 Pro Max SIM FREE</h3>
                        </div>
                        <div className='price'>
                            <h6>Price: $120</h6>
                            <hr/>
                        </div>
                        <div className='productShortDetails'>
                            <p>Apple [SIM Unlocked] iPhone 11 Pro Max

                                Condition : New

                                OS: 14.4.2

                                Apple [SIM Unlocked]

                                For the operation test, we check the energization and initialize it.
                                Accessories: All are available

                                Explanation of network usage restrictions:
                                ○ Not subject to network usage restrictions. You can use it.
                                </p>
                        </div>
                        <div>
                            <h3>
                                Color:
                            </h3>
                            <div className='color'>
                            <button className='btn btn-outline-secondary'>Silver</button>
                            <button className='btn btn-outline-secondary'>Green</button>
                            <button className='btn btn-outline-secondary'>Gold</button>
                            </div>

                        </div>
                        <div>
                            <h3>Capacity:</h3>
                            <div className='mb-3'>
                                <button className='btn btn-outline-secondary'>64GB</button>
                                <button className='btn btn-outline-secondary'>256GB</button>
                                <button className='btn btn-outline-secondary'>512GB</button>
                            </div>
                        </div>
                        
                        <div className='addButton'>
                            <div className='row'>
                                <button className='btn btn-warning col-4 m-1'>Add to Wishlist</button>
                                <button className='btn btn-primary col-4 m-1'>Add to Cart</button>
                            </div>
                            
                        </div>
                    </div>
            </div>
            <div className='middlePart'>
                <div>
                    <h3 className='productTitleMiddlePart'>Product details of ALL VERSIONS: A2218, A2161, A2220</h3>
                    <p>Versions: A2218 (International); A2161 (USA, Canada, Puerto Rico, U.S. Virgin Islands), A2220 (China, Hong Kong)</p>
                    <hr/><br/><br/>
                    <hr/>
                </div>
            </div>
            <div className='bottomPart'>
                <h3>Related Products</h3>
                <div className='relatedProduct'>
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
                </div>
            </div>
        </div>
    </div>
  )
}
