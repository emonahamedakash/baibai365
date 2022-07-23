import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AllCategory.css'
import { BASE_URL } from '../../baseUrl';

const AllCategory = () => {
  const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetchCategories().then();
    }, []);

    const fetchCategories = async ()=> {
        await axios.get(`${BASE_URL}/api/v1/category/list/all`, {
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
            setCategories(temp);
        });
    }

  return (
    <div className='container'>
      <div className='row category'>
        {
          categories.map((category) =>
          <Link to="/allcategory/category" className='col-md categoryLink categoryCard'>
          <img className='categoryImg' src='https://baibai365.com/wp-content/uploads/2021/09/IMG_3852-320x320.jpg' alt='categoryLogo'/>
          {/* <img src={category.image} alt='categoryLogo'/> */}
          <h4>{category.name}</h4>
          </Link>
          
        )
        }
      </div>
    </div>
  )
}
export default AllCategory;