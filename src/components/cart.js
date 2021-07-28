import React from 'react'
import Product from './Product'

const Cart = ({cart,setCart}) => {
    console.log('cart',cart)
    const total = cart.reduce((acc,total)=> acc + total.price,0)
    console.log('total')
  return (
    <div>
      <h3 className='title'>Carrrito</h3>
       {cart.length ===0 ? 
       (<h3>NO ITEMS on the Cart</h3>)
       :(cart.map((plate,i)=> 
       <Product 
       key={i}
       plate={plate}
       cart={cart}
       setCart={setCart}
       />))}
       {total}
    </div>
  )
}

export default Cart