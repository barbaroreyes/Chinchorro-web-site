import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {API,graphqlOperation} from 'aws-amplify'
import {listPlates} from '../graphql/queries'
import  Product from '../components/Product'
const Products = () => {
const [principales,setprincipales] = useState([])
  useEffect(async()=>{
    try {
      const principalData = await API.graphql(graphqlOperation(listPlates))
      const  listPrincipal = principalData.data.listPlates.items
      const  filterP = listPrincipal.filter(plate => plate.category === 'principal')
      setprincipales(filterP)
      console.log('filterP ',filterP )
    } catch (error) {
      
    }
  },[])
  return (
    <div className='main'>
      <Link className ='nav' to='/'>Home</Link>
      {principales.map((item,i)=>{
       return (
         <Product 
         key={i}
         name={item.name}
         description={item.description}
          image={item.image}
         />
       )
      })}
    </div>
  )
}

export default Products
