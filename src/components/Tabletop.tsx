import React from 'react'
import { IState } from "../App";
import { useState, useEffect } from 'react';
import axios from 'axios';


interface Props {
   country : IState["people"]
   setCountry :  React.Dispatch<React.SetStateAction<IState["people"]>>;
   loading : boolean
   setCurrentPage: (value: number) => void
}

const Tabletop: React.FC<Props> = ({
country, 
setCountry, 
loading,
setCurrentPage
}) => {
    let data = [...country]
    const sortA = () => {
      let newCountry = [...data]
      newCountry = data.sort((a, b)=> {
        if (b.name < a.name) {
          return 1;
        }
      
        if (b.name > a.name) {
          return -1;
        }
      
        return 0;
       })
            setCountry(newCountry)
            setCurrentPage(1)
    }
    const sortB = () => {
      let newCountry = [...data]
      newCountry = data.sort((a, b)=> {
       if (b.name < a.name) {
         return -1;
       }
     
       if (b.name > a.name) {
         return 1;
       }
     
       return 0;
      })
           setCountry(newCountry)
           setCurrentPage(1)
   }
     
    return (
        <div className='h-[45px] bg-[#374151] rounded-t-lg flex justify-between items-center px-10'>
        <div className='flex '>
        <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 hover:bg-gray-700' onClick={sortA}>A - Z</div>
         <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 ms-2 hover:bg-gray-700' onClick={sortB}>Z - A</div> 
        </div>
          <div className='flex'>
          <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 hover:bg-gray-700'>Smaller than Lithuania</div>
         <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 ms-2 hover:bg-gray-700'>Oceania</div>
          </div>
      </div>
    )
}

export default Tabletop
