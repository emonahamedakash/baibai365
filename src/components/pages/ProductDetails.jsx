import React, { useState, useEffect } from 'react'
import './ProductDetails.css'
import axios from 'axios'
import { BASE_URL } from '../../baseUrl'
import ReactImageMagnify from 'react-image-magnify'
import ProductCard from '../shop/ProductCard'
import watch from '../assets/watch.jpg'
import watch2 from '../assets/watch2.jpg'
import watch3 from '../assets/watch3.jpg'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

const ProductDetails = () => {
    const [images] = useState([watch, watch2, watch3]);
    const [largeImageSrc, setLargeImageSrc] = useState(images);
    const [relProducts, setRelProducts] = useState([]);
    
    const {state} = useLocation();
    const {product} = state;
    const handleImageChange = (imgNo) => {
        setLargeImageSrc(images[imgNo])
    }

    
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

    const description = product.description;

    const imageLink = `${BASE_URL}${product.images[0].imageUrl}`;

  return (
    <div className='productDetails'>

        <div className='row upperPart'>
            <div className='col-md'>
                <div className='productImages'>
                    <div className='subImage'>
                        {/* {
                            images.map((eachImage, index) => (
                                <button className='subImageButton' key={index} onClick={() => handleImageChange(index)}>
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
                            height: 1800
                        }
                    }} />
                    </div>
                </div>
            </div>

         <div className='col-md'>
            <h3>{product.name}</h3>
            <h6>Price: ¥{product.salePrice}</h6>
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
                    <button className='btn btn-warning col-md-4 m-1'>Add to Wishlist</button>
                    <button className='btn btn-primary col-md-4 m-1'>Add to Cart</button>
                </div>
            </div>
            </div>
        
    

</div>
        <div className='middlePart'>
            <hr/><br/>
            <h3 className='productTitleMiddlePart'>Product Details of</h3>
                    { parse(description)}
            </div><hr/>
        <div className='bottomPart'>
            <div className='container'>
            <h3>Related Products</h3>
            <div className='row justify-content-center'>
                {
                relProducts.filter(each => each.subCategory.id === product.subCategory.id)
                .map((relproduct)=> (
                    <div className='col-md'>
                        <ProductCard
                        title={relproduct.name}
                        price={relproduct.regularPrice}
                        image={relproduct.images.length>0? `${BASE_URL}${relproduct.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"}
                        
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