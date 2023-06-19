import axios from 'axios';
import Navbar from '../src/components/navbar'
import Table from './components/Table'
import { useState, useEffect } from 'react';


export interface IState {
  people: {
      name: string
      region: string
      area: number   
  }[]
}

function App() {
    const endpoint = 'https://restcountries.com/v2/all?fields=name,region,area'
     const [country, setCountry] = useState<IState["people"]>([])
     const [data, setData] = useState<IState["people"]>([])
     const [loading, setLoading] = useState(true);
     const [currentPage, setCurrentPage] = useState(1);
     const [recordsPerPage] = useState(10);
     const indexOfLastRecord = currentPage * recordsPerPage;
     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
     const currentRecords = country.slice(indexOfFirstRecord, indexOfLastRecord);
     const nPages = Math.ceil(country.length / recordsPerPage)

     useEffect(() => {
         axios.get(endpoint).then((response) =>{
             setCountry(response.data)
             setData(response.data)
             setLoading(false);
         }).catch(() => {
          alert('There was an error while retrieving the data')
      })
     }, [])

  return (
    <>
       <Navbar /> 
       <Table 
       country = {country} 
       setCountry = {setCountry} 
       loading = {loading}
       currentRecords = {currentRecords}
       nPages={nPages}
       currentPage={currentPage}
       setCurrentPage={setCurrentPage}
       data = {data}
       setData = {setData}
       />
    </>
  )
}

export default App
