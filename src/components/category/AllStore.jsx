import React, { useState, useEffect } from 'react'
import './CategoryCard.css'
import CategoryCard from './CategoryCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../baseUrl'

export const AllStore = () => {

  const [stores, setStores] = useState([]);

   //Store fetching from here
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
    //Store fetching end
    const navigateStore = useNavigate();
          

  return (
    <div className='container'>
    <div className='row category'>
         {
          stores.map((store) =>{
          return <div className='col-sm categoryLink categoryCard'>
            <CategoryCard
              image={`${BASE_URL}${store.storeLogoThumbnailUrl}`}
              name={store.name}
              onClick={()=>navigateStore("store", {state: {sName: store.name}})}
            />
          </div>
          }
        )
        }
    </div>
    </div>
  )
}

export default AllStore