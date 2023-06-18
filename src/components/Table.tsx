import React from 'react'

interface Props {
    
}

const Table = (props: Props) => {
    return (
        <div className='text-white w-3/5 h-[550px] mx-auto border-solid border-gray-600 border-[1px] rounded-xl flex flex-col justify-between'>
              <div className='h-[45px] bg-[#374151] rounded-t-lg'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, dolorem.
              </div>
              <div className=''></div>
              <div className='h-[50px] bg-[#374151] rounded-b-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quidem!</div>
        </div>
    )
}

export default Table
