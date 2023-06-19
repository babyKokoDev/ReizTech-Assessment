import React from 'react'
import Tabletop from './Tabletop'
import Tablecontent from './Tablecontent'
import Tablebottom from './Tablebottom'
import { IState } from "../App";

interface Props {
   country : IState["people"]
   setCountry :  React.Dispatch<React.SetStateAction<IState["people"]>>;
}

const Table : React.FC<Props> = ({country, setCountry}) => {
    return (
        <div className='text-white w-3/5 h-[550px] mx-auto border-solid border-gray-600 border-[1px] rounded-xl flex flex-col justify-between'>
               <Tabletop country = {country} setCountry = {setCountry}/>
               <Tablecontent country = {country} setCountry = {setCountry} />
               <Tablebottom country = {country} setCountry = {setCountry} />
              
        </div>
    )
}

export default Table
