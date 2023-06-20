import React, { useState } from 'react'
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

    const [condition, setCondition] = useState<string>("asc")
    const sortA = () => {
      let newCountry = [...data]
      newCountry = data.sort((a, b)=> {
        return a.name.localeCompare(b.name);
       })
            setCountry(newCountry)
            setCurrentPage(1)
            setCondition('asc')
    }
    const sortB = () => {
      let newCountry = [...data]
      newCountry = data.sort((a, b)=> {
        return b.name.localeCompare(a.name);
      })
           setCountry(newCountry)
           setCurrentPage(1)
           setCondition('desc')
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
     setCondition('small')
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
     setCondition('oceania')
   }
     
    return (
        <div className='h-[45px] bg-[#374151] rounded-t-lg flex justify-between items-center px-10'>
        <div className='flex '>
        <div className={`${condition == 'asc' ? 'bg-gray-400 text-gray-900 font-bold' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'} border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium  cursor-pointer  duration-1000 `} onClick={sortA}>A - Z</div>
         <div className={`${condition == 'desc' ? 'bg-gray-400 text-gray-900 font-bold' : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'} border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium  cursor-pointer  duration-1000 `} onClick={sortB}>Z - A</div> 
        </div>
          <div className='flex'>
          <div className={`${condition == 'small' ? 'bg-gray-400 text-gray-900 font-bold' : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'} border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium  cursor-pointer  duration-1000 `} onClick={smallerThanLit}>Smaller than Lithuania</div>
         <div className={`${condition == 'oceania' ? 'bg-gray-400 text-gray-900 font-bold' : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'} border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium  cursor-pointer duration-1000 `} onClick={oceaniaRegion}>Oceania</div>
          </div>
      </div>
    )
}

export default Tabletop
