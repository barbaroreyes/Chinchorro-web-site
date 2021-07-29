import React from 'react'
import Main from './main'
import Nav from './Nav'

import  {AmplifySignOut,withAuthenticator} from  '@aws-amplify/ui-react'

const Login = ( {addToCart}) => {
  return (
    <div>
     <h1>Login</h1>
     <AmplifySignOut/>
     <Nav/>
     <Main 
     addToCart={addToCart}
     />
     
    </div>
  )
}

export default withAuthenticator(Login) 
