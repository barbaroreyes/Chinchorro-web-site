import React from 'react'
import {Link} from 'react-router-dom'
const Product = (props) => {
  return (
    <div className='product'>
      
    <Link className='nav' to='/cart' onClick={()=>props.addToCart({...props})} >
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img  className ='image-product'src={props.image} alt="#"/>
      <span>${props.price}</span>
      
      
    </Link>
    
    </div>
  )
}

export default Product
