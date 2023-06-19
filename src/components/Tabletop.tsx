import React from 'react'

import { IState } from "../App";

interface Props {
   country : IState["people"]
   setCountry :  React.Dispatch<React.SetStateAction<IState["people"]>>;
}

const Tabletop: React.FC<Props> = ({country, setCountry}) => {
    return (
        <div className='h-[45px] bg-[#374151] rounded-t-lg flex justify-between items-center px-10'>
        <div className='flex '>
        <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 hover:bg-gray-700'>A - Z</div>
         <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 ms-2 hover:bg-gray-700'>Z - A</div> 
        </div>
          <div className='flex'>
          <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 hover:bg-gray-700'>Smaller than Lithuania</div>
         <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 ms-2 hover:bg-gray-700'>Oceania</div>
          </div>
      </div>
    )
}

export default Tabletop
