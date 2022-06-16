import React from 'react'
import './Subcategory.css'

const Subcategory = (props) => {
    
  return (
    <div className='Subcategory'>
        <div className='SubcategoryTitle'>
            <h3>{props.SubcategoryTitle}</h3>
        </div>
        <div className='SubcategoryList'>
            <ul>
                <li className='list'>
                    <a className='link' href={props.SubcategoryListLink}>{props.SubcategoryListTitle}</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Subcategory