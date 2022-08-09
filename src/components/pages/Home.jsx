import React, {useState, useEffect} from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import { BASE_URL } from '../../baseUrl'
import Slider from '../home/Slider'
import ProductCard from '../shop/ProductCard'
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/actions/cartAction';
import { ADDWISH } from '../../redux/actions/wishAction';
import Spinner from '../Spinner';

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
    //reducer start
    const dispatch = useDispatch();
    const send = (e) =>{
        dispatch(ADD(e));
    }
    const sendWish = (e) =>{
        dispatch(ADDWISH(e));
    }
    //reducer end

    const navigate = useNavigate();
  return (
    <div className='home'>
        <Slider/>
        <div className='container-fluid'>
            <h3 style={{textAlign:"center",fontSize:"40px",margin:"10px"}}>Featured Products</h3>
            <div className="row">
                    {
                        products.map((product)=>{
                            
                            return   <div  className="col-sm">
                                 <ProductCard 
                                        id={product.id}
                                        title={product.name}
                                        regularPrice={product.regularPrice}
                                        price={product.salePrice}
                                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://us.123rf.com/450wm/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg?ver=6"} 
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
                        .filter(each => each.category?.id === 1)
                        .map((product)=>
                        <div  className="col-sm">
                            <ProductCard className="col-sm"
                        id={product.id}
                        title={product.title}
                        regularPrice={product.regularPrice}
                        price={product.salePrice}
                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                        btnFunction= {()=> send(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                    />
                    </div>
                        )
                    }
                    <div className='more'>

                    <Link to="/allcategory/category"><button className='btn btn-outline-secondary'>See More</button></Link>
                    </div>
            </div>
            <h3 style={{textAlign:"center",fontSize:"40px",margin:"10px 0"}}>Grocery</h3>
            <div className="row">
                    {
                        products
                        .filter(each => each.category?.id === 2)
                        .map((product)=>
                        <div  className="col-sm">
                            <ProductCard className="col-sm"
                        id='4903850'
                        title={product.name}
                        regularPrice={product.regularPrice}
                        price={product.salePrice}
                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                        btnFunction= {()=> send(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                    />
                    </div>
                        )
                    }
                    <div className='more'>
                    <Link to="/allcategory/category"><button className='btn btn-outline-secondary'>See More</button></Link>
                    </div>
            </div>
            <h3 style={{textAlign:"center",fontSize:"40px",margin:"10px 0"}}>Fashion</h3>
            <div className="row">
                    {
                        products
                        .filter(each => each.category?.id === 3)
                        .map((product)=>
                        <div  className="col-sm">
                            <ProductCard className="col-sm"
                        id='4903850'
                        title={product.name}
                        regularPrice={product.regularPrice}
                        price={product.salePrice}
                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                        btnFunction= {()=> send(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                    />
                    </div>
                        )
                    }
                    <div className='more'>
                    <button className='btn btn-outline-secondary'>See More</button>
                    </div>
            </div>
            <h3 style={{textAlign:"center",fontSize:"40px",margin:"10px 0"}}>Health & Beauty</h3>
            <div className="row">
                    {
                        products
                        .filter(each => each.category?.id === 4)
                        .map((product)=>
                        <div  className="col-sm">
                            <ProductCard className="col-sm"
                        id='4903850'
                        title={product.name}
                        regularPrice={product.regularPrice}
                        price={product.salePrice}
                        image={product.images.length>0? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} 
                        btnFunction= {()=> send(product)}
                        onClick={()=>navigate("/products/productdetails", {state: {product: product}})}
                    />
                    </div>
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
