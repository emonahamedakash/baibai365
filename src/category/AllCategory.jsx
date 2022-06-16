import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './AllCategory.css'
const AllCategory = () => {
  // const [categories, setCategories] = useState([]);
  //   useEffect( () => {
  //       fetchCategories().then();
  //   }, []);

  //   const fetchCategories = async ()=> {
  //       await axios.get('http://35.77.48.71:8080/backend/api/v1/category/list', {
  //           params: {
  //               "access_token": localStorage.getItem("accessToken")
  //           }
  //       }).then((response) => {
  //           console.log(response.data);
  //           let temp = [];
  //           response.data.data.forEach((item) => {
  //               temp.push(item);
  //               console.log(item.id);
  //           })
  //           setCategories(temp);
  //       });
  //   }

  return (
    <div>
        <div className='row justify-content-md-center'>
            <div className='col-md-2 categoryCard'>
                <Link to="/electronics" className='categoryLink'>
                    <img src='https://rukminim2.flixcart.com/flap/128/128/image/52e3aff0b20ad632.png?q=100' alt='categoryLogo'/>
                    <h3>Electronics</h3>
                </Link>
            </div>
        </div>
    </div>
  )
}
export default AllCategory;