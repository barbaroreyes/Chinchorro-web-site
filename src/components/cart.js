import React from 'react'
import Product from './Product'

const Cart = ({cart}) => {
    console.log('cart',cart)
    const total = cart.reduce((acc,total)=> acc + total.price,0)
    console.log(total)
  return (
    <div className="div-cart">
      <h3 className='title'>Carrrito</h3>
       {cart.length ===0 ? 
       (<h3 className='carrito-vacio'>NO ITEMS on the Cart</h3>)
       :(cart.map((item,i)=> 
       <Product
        key={i}
        {...item}
       />
      ))}
     <h1 className='total'>Total:{total}</h1>
     <h1 className='total'>Total:{cart.length}</h1>

    </div>
  )
}

export default Cart