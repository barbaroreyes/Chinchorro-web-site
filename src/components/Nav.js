import React from 'react'
import  {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='navigation'>
        <Link className ='nav categories' to= '/products'>Menu Regular</Link>
      <Link className ='nav categories' to= '/especiales'>Especiales</Link>
      <Link className ='nav categories' to= '/'>Menu Regular</Link>
      <Link className ='nav categories' to= '/'>Especiales</Link>
    
   
    </nav>
  )
}

export default Nav
