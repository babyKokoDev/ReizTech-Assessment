import axios from 'axios';
import Navbar from '../src/components/navbar'
import Table from './components/Table'
import Tablebottom from './components/Tablebottom'
import { useState, useEffect } from 'react';


export interface IState {
  people: {
      name: string
      region: number
      area: number   
  }[]
}

function App() {
     const [country, setCountry] = useState<IState["people"]>([])
     const endpoint = 'https://restcountries.com/v2/all?fields=name,region,area'
     useEffect(() => {
         axios.get(endpoint).then((response) =>{
             setCountry(response.data)
         })
     }, [])
  return (
    <>
       <Navbar /> 
       <Table country = {country} setCountry = {setCountry}/>
    </>
  )
}

export default App
