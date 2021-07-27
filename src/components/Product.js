import React from 'react'
import {Link} from 'react-router-dom'
const Product = ({name, description,image}) => {
  return (
    <div className='product'>
    <Link className='nav' to='/cart'>
      <h1>{name}</h1>
      <p>{description}</p>
      <img  className ='image-product'src={image} alt="#"/>
    </Link>
    </div>
  )
}

export default Product
