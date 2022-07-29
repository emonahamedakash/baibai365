import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../baseUrl';
import './Cart.css'
import Navbar from '../home/header/Navbar'
import { DLT, CLR } from '../../redux/actions/cartAction';

const Cart = () => {
const [price, setPrice] = useState();

    const getData = useSelector((state)=> state.cartReducer.carts);


    const dispatch = useDispatch();
    const delet = (id) =>{
      dispatch(DLT(id));
  }
  
  const handleSubmit = (newdata) =>{
    alert("Order received successfully")
}

  const total = ()=>{
    let price = 0;
    getData.map((ele)=>{
      price = parseFloat(ele.salePrice) + price
    })
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total]);

 
  return (
    <div className='container-fluid'>
        <div className='row cartContainer'>
          <h2 style={{textAlign:"center"}}>Cart</h2>
            <div className='col-md-8'>
            {
                getData.map((e)=>{
                    return(
                        <>
                            <div className='cartItemList row'>
                                <div className='col-md'>
                                <img className='mx-auto cartImg' src={e.images.length>0? `${BASE_URL}${e.images[0].thumbUrl.replace("D:", "")}`:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"} alt={e.title}/>
                                </div>
                                <div className='productSummery col-md'>
                                <h5 className='title'>{e.title}</h5>
                                <p className='color'>White</p>
                                <p className='size'>Small</p>
                                </div>
                                <div className='quantity col-md'>
                                <input type='number' className='w-50 p-3' placeholder='1'/>
                                </div>
                                <div className='price col-md'>
                                <h3>¥{e.salePrice}</h3>
                                <button onClick={()=>delet(e.id)} className='btn btn-warning'>Remove</button>
                                </div>
                            </div>
                            
                        </>
                    )
                })
            }
            </div>
            <div className='col-md-4'>
              <div className='total'>
                  <div className='checkoutTotal'>
                    <div className='row'>
                    <div className='col-md-9'><p>Total Cost</p></div>
                    <div className='col-md-2'>¥{price}</div>
                  </div>
                </div>
                <button onClick={handleSubmit} className='btn btn-primary w-100 mt-5 mb-2'>PROCEED TO CHECKOUT</button>
                <button className='btn btn-outline-success w-100'>Continue shopping</button>
              </div>
              </div>
            </div>   
        </div>
  )
}

export default Cart