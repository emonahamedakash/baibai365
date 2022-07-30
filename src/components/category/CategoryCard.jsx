import React from 'react'

const CategoryCard = (props) => {
  return (
    <div>

    <div style={{width:"300px",height:"350px"}}>
        <img className='img-fluid' onClick={props.onClick} src={props.image} alt='categoryThumb'/>
        <h4>{props.name}</h4>
    </div>
    </div>

  )
}

export default CategoryCard