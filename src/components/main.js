import React, {useState,useEffect} from 'react'
import {API,graphqlOperation} from 'aws-amplify'
import Categories from './Categories'
import {listPlates} from  '../graphql/queries'
import Product from './Product'


const Main = () => {
  const [plates,setPlates] = useState([])
  useEffect(()=>{
    fetchSpecials()
  },[])

  const fetchSpecials = async () =>{
      try {
          const espeData = await API.graphql(graphqlOperation(listPlates))
          const listespecial = espeData.data.listPlates.items
          const  filterP = listespecial.filter(plate => plate.category === 'especial')
            setPlates(filterP)
      
      } catch (error) {
          console.log('error make fetch',error)
      }
  }


  return (

    <div className='main'>
       <h1 className='speciales'>Especiales</h1>
        {plates.map((item,i)=>{
          return(
            <Product 
            key={i}
            name={item.name}
            description={item.description}
            image={item.image}
            />)
          })  
        }
      
    </div>
  )
}

export default Main
