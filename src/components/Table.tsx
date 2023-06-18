import React from 'react'
import Tabletop from './Tabletop'
import Tablecontent from './Tablecontent'
import Tablebottom from './Tablebottom'

interface Props {
    
}

const Table = (props: Props) => {
    return (
        <div className='text-white w-3/5 h-[550px] mx-auto border-solid border-gray-600 border-[1px] rounded-xl flex flex-col justify-between'>
               <Tabletop />
               <Tablecontent />
               <Tablebottom />
              
        </div>
    )
}

export default Table
