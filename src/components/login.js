import React from 'react'
import Categories from './Categories'
import Main from './main'
import Nav from './Nav'
import  {AmplifySignOut,withAuthenticator} from  '@aws-amplify/ui-react'

const Login = () => {
  return (
    <div>
     <h1>Login</h1>
     <AmplifySignOut/>
     <Nav/>
     <Main />
     <Categories/>
    </div>
  )
}

export default withAuthenticator(Login) 
