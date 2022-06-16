import React from 'react'
import Subcategory from './Subcategory'
import Product from '../Product'
import './MainCategory.css'

const CategoriesDesign = (props) => {
  return (
    <div className='categories'>
        <div className='row'>
            <div className='col-md-2'>
                <Subcategory
                SubcategoryTitle='Computers'
                />
                
                <Subcategory 
                SubcategoryListLink='#'
                SubcategoryListTitle='Computer Components'
                />
            </div>
            <div className='col-md-10'>
                <div className='products'>
                <Product 
                id='4903850'
                title='Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless'
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

export default CategoriesDesign