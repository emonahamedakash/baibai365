import React, { useState, useEffect } from 'react'
import './CategoryCard.css'
import CategoryCard from './CategoryCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../baseUrl'

export const AllManufacturer = () => {

  const [manufacturers, setManufacturers] = useState([]);

   //Store fetching from here
    useEffect( () => {
        fetchManufacturers().then();
    }, []);

    const fetchManufacturers = async ()=> {
        await axios.get(`${BASE_URL}/api/v1/manufacturer/list/all`, {
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
              setManufacturers(temp);
            });
          }
    //Store fetching end
    const navigateManufacturer = useNavigate();
          

  return (
    <div className='container'>
    <div className='row category'>
         {
          manufacturers.map((manufacturer) =>{
          return <div className='col-sm categoryLink categoryCard'>
            <CategoryCard
              image={`${BASE_URL}${manufacturer.image.imageUrl}`}
              name={manufacturer.name}
              onClick={()=>navigateManufacturer("manufacturer", {state: {mName: manufacturer.name}})}
            />
          </div>
          }
        )
        }
    </div>
    </div>
  )
}

export default AllManufacturer