import React, {useEffect, useState} from 'react'
import './Wishlist.css'
import Navbar from '../home/header/Navbar';
import Error from '../pages/Error';
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../baseUrl';
import {FaTrashAlt} from 'react-icons/fa';
import {DLTWISH} from '../../redux/actions/wishAction'
import { ADD } from '../../redux/actions/cartAction';

export default function Wishlist() {

  const getData = useSelector((state)=> state.wishReducer.wishes);
    console.log(getData);
    const dispatch = useDispatch();
    const delet = (id) =>{
      console.log(id);
      dispatch(DLTWISH(id));
  }

  // 👇️ scroll to top on page load
  useEffect( () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
})
// 👆 scroll to top on page load
  return(
    <div>
      <div className='wishlist container'>
          <h2 style={{textAlign:"center"}}>Wish List</h2>
            {
              getData.map((e)=>{
                if(e !== undefined){
                  return(
                    <>
                    <div className='wishlistItems'>
                    <div className='row'>
                    <div className='col-md-1 delfromwishlist'>
                      <button onClick={()=>delet(e.id)} className='btn btn-danger'>
                      <FaTrashAlt/>
                      </button>
                    </div>
                    <div className='col-md-2'>
                      <img className='wishlistLogo' src={e.images.length>0? `${BASE_URL}${e.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} alt='logo'/>
                    </div>
                    <div className='productSummery col-md-5'>
                      <h5 className='title'>{e.title}</h5>
                      <p className='color'>White</p>
                      <p className='size'>Small</p>
                    </div>
                    <div className='quantity col-md'>
                      <p>In Stock</p>
                    </div>
                    <div className='price col-md-2'>
                      <h3>¥{e.salePrice}</h3>
                      <button  className='btn btn-primary'>Add to Cart</button>
                    </div>
                    </div>
                    </div>
                    </>
                  )
                } else {
                     return <Error/>
                }
              })
            }
        </div>
    </div>
  )
}
