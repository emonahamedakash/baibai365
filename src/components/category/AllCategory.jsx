import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import './AllCategory.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../baseUrl'

export const AllCategory = () => {

  const [categories, setCategories] = useState([]);

   //Category fetching from here
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
    //category fetching end
    const navigateCat = useNavigate();
          

  return (
    <div className='container'>
      <div className='row category'>
         {
          categories.map((category) =>{
          return <div className='col-sm categoryLink categoryCard'>
            <CategoryCard 
              image={`${BASE_URL}${category.image.thumbUrl}`}
              name={category.name}
              onClick={()=>navigateCat("category", {state: {categoryId: category.id}})}
            />
          </div>
          }
        )
        }
      </div>
    </div>
  )
}

export default AllCategory






// import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import './AllCategory.css'
// import { BASE_URL } from '../../baseUrl';

// const AllCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
  
//   //Category fetching from here
//     useEffect( () => {
//         fetchCategories().then();
//     }, []);

//     const fetchCategories = async ()=> {
//         await axios.get(`${BASE_URL}/api/v1/category/list/all`, {
//           params: {
//             "access_token": localStorage.getItem("accessToken")
//         }
//         }).then((response) => {
//             console.log(response.data);
//             let temp = [];
//             response.data.data.forEach((item) => {
//                 temp.push(item);
//                 console.log(item.id);
//               })
//               setCategories(temp);
//             });
//           }
//     //category fetching end


//     //Sub category fetching end
//           const [subCategories, setSubCategories] = useState([]);
//       useEffect( () => {
//           fetchSubCategories().then();
//       }, []);

//       const fetchSubCategories = async ()=> {
//           await axios.get(`${BASE_URL}/api/v1/sub-category/list/1`, {
//               params: {
//                 "access_token": localStorage.getItem("accessToken")
//               }
//           }).then((response) => {
//               console.log(response.data);
//               let temp = [];
//               response.data.data.forEach((item) => {
//                   temp.push(item);
//                   console.log(item.id);
//               })
//               setSubCategories(temp);
//           });
//       }
//     //Sub category fetching end


// //products fetching from here
//     useEffect( () => {
//         fetchProducts().then();
//     }, []);

//     const fetchProducts = async ()=> {
//     await axios.get(`${BASE_URL}/api/v1/product/list/paginated`, {
//         params: {
//             "access_token": localStorage.getItem("accessToken")
//         }
//     }).then((response)=>{
//             let temp = [];
//             if (response.data.data.content !== undefined) {
//                 response.data.data.content.forEach((item) => {
//                     temp.push(item);
//                 });
//                 setProducts(temp);
//             }
//         });
//     }
// //products fetching end


//   return (
//     <div className='container'>
//       <div className='row category'>
//         {
//           categories.map((category) =>
//           <Link to="/allcategory/category" className='col-md categoryLink categoryCard'>
//           <img className='categoryImg' src={`${BASE_URL}${category.image.thumbUrl}`} alt='categoryLogo'/>
//           <h4>{category.name}</h4>
//           </Link>
//         )
//         }
//       </div>
//     </div>
//   )
// }
// export default AllCategory;