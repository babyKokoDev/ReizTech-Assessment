import React from 'react'

import { IState } from "../App";

interface Props {
   country : IState["people"]
   setCountry :  React.Dispatch<React.SetStateAction<IState["people"]>>;
}

const Tablecontent: React.FC<Props> = ({country, setCountry}) => {
    return (
        <div className=''>
            
        </div>
    )
}

export default Tablecontent
