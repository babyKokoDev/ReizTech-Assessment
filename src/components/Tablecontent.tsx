import React from 'react'

import { IState } from "../App";
import Pageloading from "../components/pageloading"

interface Props {
   country : IState["people"]
   setCountry :  React.Dispatch<React.SetStateAction<IState["people"]>>;
   loading : boolean
   currentRecords : IState["people"]
}

const Tablecontent: React.FC<Props> = ({
    loading,
    currentRecords
   }) => {

    if (loading) {
        return (
            <div role="status" className="w-[95%] mx-auto px-4 py-2 space-y-2   divide-y divide-gray-200 rounded shadow border border-gray-700 animate-pulse dark:divide-gray-700 ">    
           <Pageloading />
            </div>
        )
    } else {
        return (
            <div role="status" className="w-[95%] mx-auto px-4 py-2 space-y-2   divide-y divide-gray-200 rounded shadow dark:divide-gray-700 ">   
               
                     
<div className="relative overflow-x-auto rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    COUNTRY
                </th>
                <th scope="col" className="px-6 py-3">
                    REGION
                </th>
                <th scope="col" className="px-6 py-3">
                    AREA( Km<sup>2</sup> )
                </th>
            </tr>
        </thead>
        <tbody>
            {
                 currentRecords ? currentRecords.map((record, index) =>(
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-[9px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {record.name}
                </th>
                <td className="px-6 py-[9px]">
                    {record.region}
                </td>
                <td className="px-6 py-[9px]">
                    {record.area ? record.area.toLocaleString() : ''}
                </td>
            </tr>
                 )) : ''
            }     
        </tbody>
    </table>
</div>

            </div>
        )
    }
    
}

export default Tablecontent
