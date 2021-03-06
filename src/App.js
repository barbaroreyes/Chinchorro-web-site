import React ,{useState}from 'react'
import Home from './pages/Home'
import Login from './components/login'
import Main from './components/main'
import Products from './pages/Products'
import Cart from './components/Cart'
import {Switch,Route} from 'react-router-dom'

import './App.css';

function App() {
  const [cart,setCart]= useState([])

   const addToCart = (id)=>{
     
     setCart([...cart,id])
   }

  

  return (
    <div className="App">
         <Home/>
      <Switch>
        <Route exact path="/">
         <Login 
          addToCart={addToCart}
         />
         </Route>
       <Route exact path="/">
         <Main 
        
         />
       </Route>
       <Route exact path="/products">
         <Products 
            addToCart={addToCart}
         />
       </Route>
       <Route exact path="/cart">
         <Cart
          cart={cart}
          addToCart={addToCart}
        
         />
       </Route>

</Switch>
    
   
    </div>
  );
}

export default App;
