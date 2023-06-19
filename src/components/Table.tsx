import React from 'react'
import Tabletop from './Tabletop'
import Tablecontent from './Tablecontent'
import Tablebottom from './Tablebottom'
import { IState } from "../App";

interface Props {
   country : IState["people"]
   setCountry :  React.Dispatch<React.SetStateAction<IState["people"]>>;
   loading : boolean
   currentRecords : IState["people"]
   nPages : number
   currentPage : number
   setCurrentPage : (value : number) => void
}

const Table : React.FC<Props> = ({
    country, 
    setCountry, 
    loading,
    currentRecords,
    nPages,
    currentPage,
    setCurrentPage
    }) => {
    return (
        <div className='text-white w-3/5 h-[550px] mx-auto border-solid border-gray-600 border-[1px] rounded-xl flex flex-col justify-between'>
               <Tabletop 
               country = {country} 
               setCountry = {setCountry} 
               loading = {loading}
               />
               <Tablecontent 
               country = {country} 
               setCountry = {setCountry} 
               loading = {loading}
               currentRecords = {currentRecords}
               />
               <Tablebottom 
               country = {country} 
               setCountry = {setCountry} 
               loading = {loading}
               nPages={nPages}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
               />
              
        </div>
    )
}

export default Table
