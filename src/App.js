import React from 'react'
import Home from './pages/Home'
import Login from './components/login'
import Main from './components/main'
import Nav from './components/Nav'
import {Switch,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
         <Home/>
      <Switch>
        <Route exact path="/">
         <Login/>
         </Route>
       

</Switch>
    
   
    </div>
  );
}

export default App;
