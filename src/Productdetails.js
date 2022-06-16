import React, { useState } from 'react'
import './Productdetails.css'
import ReactImageMagnify from 'react-image-magnify'
import Product from './Product'
import watch from './assets/watch.jpg'
import watch2 from './assets/watch2.jpg'
import watch3 from './assets/watch3.jpg'

export default function Productdetails() {
    const [i1 , seti1] = useState(watch);
    const [i2 , seti2] = useState(watch2);
    const [i3 , seti3] = useState(watch3);
    let image = watch;
    const image1 = (watch) => {
        console.log("Image 1 clicked");
        seti1(image = i1);
    }
    const image2 = () => {
        console.log("Image 2 clicked");
        seti2(image = i2);
    }
    const image3 = () => {
        console.log("Image 3 clicked");
        seti3(image = i3);
    }
  return (
    <div className='productDetails'>
        <div className='row upperPart'>
            <div className='col-md'>
                <div className='productImages'>
                    <div className='subImage'>
                    <button className='subImageButton' onClick={image1}>
                    <img className='subImageTag' src={watch} alt='product'/>
                    </button>
                    <button className='subImageButton' onClick={image2}>
                    <img className='subImageTag' src={watch2} alt='product'/>
                    </button>
                    <button className='subImageButton' onClick={image3}>
                    <img className='subImageTag' src={watch3} alt='product'/>
                    </button>
                    </div>
                    <div className='mainImage'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: image
                        },
                        largeImage: {
                            src: image,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                    </div>
                </div>
            </div>
                <div className='col-md productSummery'>
                    <div className='productTitle'>
                        <h3>iPhone 11 Pro Max SIM FREE</h3>
                    </div>
                    <div className='price'>
                        <h6>Price: $120</h6>
                    </div>
                    <div className='productShortDetails'>
                        <p><b>Description: </b>Apple [SIM Unlocked] iPhone 11 Pro Max

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
                            <button className='btn btn-warning col-md-4 m-1'>Add to Wishlist</button>
                            <button className='btn btn-primary col-md-4 m-1'>Add to Cart</button>
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
            <div className='relatedProduct row'>
                <div className='col-md-3'>
                    <Product
                    title='iPhone Charger'
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                    rating={4}
                />
                </div>
                <div className='col-md-3'>
                    <Product
                    title='iPhone Charger'
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                    rating={4}
                />
                </div>
                <div className='col-md-3'>
                    <Product
                    title='iPhone Charger'
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SY450_.jpg"
                    rating={4}
                />
                </div>
                <div className='col-md-3'>
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
