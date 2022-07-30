import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../baseUrl'

export const AllStore = () => {

  const [stores, setStores] = useState([]);

   //Category fetching from here
    useEffect( () => {
        fetchStores().then();
    }, []);

    const fetchStores = async ()=> {
        await axios.get(`${BASE_URL}/api/v1/store/list/all`, {
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
              setStores(temp);
            });
          }
    //category fetching end
    const navigateShop = useNavigate();
          

  return (
    <div className='mx-auto' style={{display:"flex"}}>
         {
          stores.map((store) =>{
          return <div className='row'>
            <CategoryCard className='col-md-'
              image={`${BASE_URL}${store.storeLogoThumbnailUrl}`}
              name={store.name}
              onClick={()=>navigateShop("store", {state: {storeName: store.name}})}
            />
          </div>
          }
        )
        }
    </div>
  )
}

export default AllStore