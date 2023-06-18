import React from 'react'

interface Props {
    
}

const Tabletop = (props: Props) => {
    return (
        <div className='h-[45px] bg-[#374151] rounded-t-lg flex justify-between items-center px-10'>
        <div className='flex '>
        <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000'>A - Z</div>
         <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 ms-2'>Z - A</div> 
        </div>
          <div className='flex'>
          <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000'>Smaller than Lithuania</div>
         <div className='bg-gray-800 border-[2px] border-gray-600 rounded-lg py-1 px-2 me-2 font-medium text-gray-400 cursor-pointer hover:text-gray-200 duration-1000 ms-2'>Oceania</div>
          </div>
      </div>
    )
}

export default Tabletop
