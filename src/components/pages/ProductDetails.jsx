import React, { useState, useEffect } from 'react'
import './ProductDetails.css'
import axios from 'axios'
import { BASE_URL } from '../../baseUrl'
import ReactImageMagnify from 'react-image-magnify'
import ProductCard from '../shop/ProductCard'
import watch from '../assets/watch.jpg'
import watch2 from '../assets/watch2.jpg'
import watch3 from '../assets/watch3.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { ADD } from '../../redux/actions/cartAction'
import { ADDWISH } from '../../redux/actions/wishAction'
import { useDispatch } from 'react-redux'

const ProductDetails = () => {
    const [images] = useState([]);
    const [largeImageSrc, setLargeImageSrc] = useState(images);
    const [relProducts, setRelProducts] = useState([]);
    
    const {state} = useLocation();
    const {product} = state;
    const handleImageChange = (imgNo) => {
        setLargeImageSrc(images[imgNo])
    }
    const parsedes = require('html-react-parser');

    // 👇️ scroll to top on page load
    useEffect( () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    })
    // 👆 scroll to top on page load
    
    useEffect( () => {
        console.log(product);
    }, []);

    
    useEffect( () => {
        fetchRelProducts().then();
    }, []);

    const fetchRelProducts = async ()=> {
    await axios.get(`${BASE_URL}/api/v1/product/list/paginated`, {
        params: {
            "access_token": localStorage.getItem("accessToken")
        }
    }).then((response)=>{
            let temp = [];
            if (response.data.data.content !== undefined) {
                response.data.data.content.forEach((item) => {
                    temp.push(item);
                });
                setRelProducts(temp);
            }
        });
    }


    const imageLink = `${BASE_URL}${product.images[0].imageUrl}`;
    // from redux
    const dispatch = useDispatch();
    const send = (e) =>{
        dispatch(ADD(e));
    }
    const sendWish = (e) =>{
        dispatch(ADDWISH(e));
    }



    const navigate = useNavigate();

  return (
    <div className='productDetails'>
        <div className='row upperPart'>
            <div className='col-md'>
                <div className='productImages'>
                    <div className='subImage'>
                        {/* {
                            product.images.map((eachImage, index) => (
                                <button className='subImageButton' onClick={() => handleImageChange(index)}>
                                    <img className='subImageTag' src={eachImage} alt='product'/>
                                </button>  
                            ))
                        } */}
                    </div>
                    <div className='mainImage'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: product.title,
                            isFluidWidth: true,
                            src: imageLink
                        },
                        largeImage: {
                            src: imageLink,
                            width: 1200,
                            height: 1200
                        }
                    }} />
                    </div>
                </div>
            </div>

         <div className='col-md'>
            <h2>{product.name}</h2>
            <p><b>Seller: </b>{product.store.name}</p>
            <p><b>Manufatured by: </b>{product.manufacturer.name}</p>
            <h6 style={{color:"gray"}}>Regular Price: ¥<del>{product.regularPrice}</del></h6>
            <h5 style={{color:"red"}}>Price: ¥{product.salePrice}</h5>
            <div>
                <h3>Color:</h3>
                
                    <button className='btn btn-outline-secondary cpbtn' >Green</button>
                    {/* <button className='btn btn-outline-secondary cpbtn' >{product.productVariants[1].featureDetails[1].name}</button>
                    <button className='btn btn-outline-secondary cpbtn' >{product.productVariants[2].featureDetails[1].name}</button> */}
                
            </div>
            <div>
                <h3>Capacity:</h3>
                <div>
                    <button className='btn btn-outline-secondary cpbtn' >64GB</button>
                    {/* <button className='btn btn-outline-secondary cpbtn' >{product.productVariants[0].featureDetails[0].name}</button>
                    <button className='btn btn-outline-secondary cpbtn' >{product.productVariants[1].featureDetails[0].name}</button> */}
                </div>
            </div>
            <div className='addButton'>
                <div className='row'>
                    <button onClick={sendWish} className='btn btn-warning col-md-4 m-1'>Add to Wishlist</button>
                    <button onClick={send} className='btn btn-primary col-md-4 m-1'>Add to Cart</button>
                </div>
            </div>
            </div>
        
    

</div>
        <div className='middlePart'>
            <hr/><br/>
            <h3 className='productTitleMiddlePart'>Product Details of</h3>
                    <div>
                        { parse(product.description)}
                        </div>
            </div><hr/>
        <div className='bottomPart'>
            <div className='container'>
            <h3>Related Products</h3>
            <div className='row justify-content-center'>
                {
                relProducts.filter(each => each.subCategory?.id === product.subCategory.id)
                .map((relproduct)=> (
                    <div className='col-md'>
                        <ProductCard
                        title={relproduct.name}
                        price={relproduct.regularPrice}
                        image={relproduct.images.length>0? `${BASE_URL}${relproduct.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"}
                        btnFunction= {()=> send(product)}
                        wishBtnFunction= {()=> sendWish(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: relproduct}})}

                    />
                    </div>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}
export default ProductDetails;