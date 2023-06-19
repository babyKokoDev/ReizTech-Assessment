import React from 'react'

import { IState } from "../App";

interface Props {
   country : IState["people"]
   setCountry :  React.Dispatch<React.SetStateAction<IState["people"]>>;
}

const Tablebottom : React.FC<Props> = ({country, setCountry}) => {
    return (
        <div className='h-[50px] bg-[#374151] rounded-b-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quidem!</div>
    )
}

export default Tablebottom
