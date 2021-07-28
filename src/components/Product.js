import React from 'react'
import {Link} from 'react-router-dom'
const Product = ({name, description,image,price}) => {
  return (
    <div className='product'>
    <Link className='nav' to='/cart'>
      <h1>{name}</h1>
      <p>{description}</p>
      <img  className ='image-product'src={image} alt="#"/>
      <span>${price}</span>
    </Link>
    </div>
  )
}

export default Product
