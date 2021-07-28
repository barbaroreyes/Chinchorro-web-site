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
  const [products,setProduct]= useState([])

   

  

  return (
    <div className="App">
         <Home/>
      <Switch>
        <Route exact path="/">
         <Login/>
         </Route>
       <Route exact path="/main">
         <Main/>
       </Route>
       <Route exact path="/products">
         <Products 
         cart={cart}
         setCart={setCart}
         />
       </Route>
       <Route exact path="/cart">
         <Cart
          cart={cart}
          setCart={setCart}
         />
       </Route>

</Switch>
    
   
    </div>
  );
}

export default App;
