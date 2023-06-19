import React from 'react'
import { IState } from "../App";

interface Props {
   country : IState["people"]
   setCountry :  React.Dispatch<React.SetStateAction<IState["people"]>>;
   loading : boolean
   setCurrentPage: (value: number) => void
   data : IState["people"]
   setData :  React.Dispatch<React.SetStateAction<IState["people"]>>;
}

const Tabletop: React.FC<Props> = ({
setCountry, 
setCurrentPage,
data,
}) => {
    data = [...data]
    const sortA = () => {
      let newCountry = [...data]
      newCountry = data.sort((a, b)=> {
        return a.name.localeCompare(b.name);
       })
            setCountry(newCountry)
            setCurrentPage(1)
    }
    const sortB = () => {
      let newCountry = [...data]
      newCountry = data.sort((a, b)=> {
        return b.name.localeCompare(a.name);
      })
           setCountry(newCountry)
           setCurrentPage(1)
   }

   const smallerThanLit = () => {
    let newCountry = [...data]
    newCountry = newCountry.filter((country)=>{
       if (country.area < 65300){
        return true
       }
    })
     setCountry(newCountry)
     setCurrentPage(1)
   }

   const oceaniaRegion = () => {
    let newCountry = [...data]
    newCountry = newCountry.filter((country)=>{
       if (country.region == "Oceania"){
        return true
       }
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
          <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 hover:bg-gray-700' onClick={smallerThanLit}>Smaller than Lithuania</div>
         <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 ms-2 hover:bg-gray-700' onClick={oceaniaRegion}>Oceania</div>
          </div>
      </div>
    )
}

export default Tabletop
