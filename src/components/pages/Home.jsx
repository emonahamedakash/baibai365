import React, {useState, useEffect} from 'react'
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import { BASE_URL } from '../../baseUrl'
import Slider from '../home/Slider'
import ProductCard from '../shop/ProductCard'
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/actions/cartAction';
import { ADDWISH } from '../../redux/actions/wishAction';

export default function Home() {
    const [products, setProducts] = useState([]);
    
    useEffect( () => {
        fetchProducts().then();
    }, []);

    const fetchProducts = async ()=> {
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
                setProducts(temp);
            }
        });
    }
    const dispatch = useDispatch();
    const send = (e) =>{
        dispatch(ADD(e));
    }
    const sendWish = (e) =>{
        dispatch(ADDWISH(e));
    }

    const navigate = useNavigate();
  return (
    <div className='home'>
        <Slider/>
        <div className="container">
            <h3 style={{textAlign:"center",fontSize:"40px",margin:"10px 0"}}>Featured Products</h3>
            <div className="row">
                    {
                        products.map((product)=>{
                            return <div className='col-md-3'>
                                        <ProductCard className="col-sm-" id={product.id}
                                        title={product.name}
                                        regularPrice={product.regularPrice}
                                        price={product.salePrice}
                                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                                        btnFunction= {()=> send(product)}
                                        wishBtnFunction= {()=> sendWish(product)}
                                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                                        />
                                     
                                        
                                    </div>
                                    
                    })
                    }
                    <div className='more'>
                    <Link to="/allcategory/category"><button className='btn btn-outline-secondary'>See More</button></Link>
                    </div>
            </div>
            <h3 style={{textAlign:"center",fontSize:"40px"}}>Electronics</h3>
            <div className="row">
                    {
                        products
                        .filter(each => each.category.id === 1)
                        .map((product)=>
                            <ProductCard className="col-sm-"
                        id={product.id}
                        title={product.title}
                        regularPrice={product.regularPrice}
                        price={product.salePrice}
                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                        btnFunction= {()=> send(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                    />
                    
                        )
                    }
                    <div className='more'>

                    <Link to="/allcategory/category"><button className='btn btn-outline-secondary'>See More</button></Link>
                    </div>
            </div>
            <h3>Grocery</h3>
            <div className="row">
                    {
                        products
                        .filter(each => each.category.id === 2)
                        .map((product)=>
                            <ProductCard className="col-sm-"
                        id='4903850'
                        title={product.name}
                        regularPrice={product.regularPrice}
                        price={product.salePrice}
                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                        btnFunction= {()=> send(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                    />
                    
                        )
                    }
                    <div className='more'>
                    <Link to="/allcategory/category"><button className='btn btn-outline-secondary'>See More</button></Link>
                    </div>
            </div>
            <h3>Fashion</h3>
            <div className="row">
                    {
                        products
                        .filter(each => each.category.id === 3)
                        .map((product)=>
                            <ProductCard className="col-sm-"
                        id='4903850'
                        title={product.name}
                        regularPrice={product.regularPrice}
                        price={product.salePrice}
                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                        btnFunction= {()=> send(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                    />
                    
                        )
                    }
                    <div className='more'>
                    <button className='btn btn-outline-secondary'>See More</button>
                    </div>
            </div>
            <h3>Health & Beauty</h3>
            <div className="row">
                    {
                        products
                        .filter(each => each.category.id === 4)
                        .map((product)=>
                            <ProductCard className="col-sm-"
                        id='4903850'
                        title={product.name}
                        regularPrice={product.regularPrice}
                        price={product.salePrice}
                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                        btnFunction= {()=> send(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                    />
                    
                        )
                    }
                    <div className='more'>
                    <button className='btn btn-outline-secondary'>See More</button>
                    </div>
            </div>
            
        </div>
    </div>
  );
}
