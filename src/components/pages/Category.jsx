import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../home/header/Navbar'
import axios from 'axios'
import './Category.css'
import { BASE_URL } from '../../baseUrl'
import ProductCard from '../shop/ProductCard'

function Category (props) {
  const [subCategories, setSubCategories] = useState([]);
  useEffect( () => {
      fetchSubCategories().then();
  }, []);

  const fetchSubCategories = async ()=> {
      await axios.get(`${BASE_URL}/api/v1/sub-category/list/1`, {
          params: {
            "access_token": localStorage.getItem("accessToken")
          }
      }).then((response) => {
          console.log(response.data);
          let temp = [];
          response.data.data.forEach((item) => {
              temp.push(item);
              console.log(item.id);
          })
          setSubCategories(temp);
      });
  }
  return (
    <div className='categories'>
        <div className='row'>
            <div className='col-md-2'>
            {subCategories.map((subCategory) =>
            <div>
                
                <div className='SubcategoryList'>
                <ul>
                    <li className='list'>
                        <Link className='link' to='/'>{subCategory.name}</Link>
                    </li>
                </ul>
                </div>
            </div>
              )}
            </div>
            <div className='col-md-10'>
                <div className='products'>
                <ProductCard 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard '
                price={44.74}
                image="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL320_.jpg"
                rating={5}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category