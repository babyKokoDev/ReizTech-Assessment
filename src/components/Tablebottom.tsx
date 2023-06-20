import React from 'react'

import { IState } from "../App";

interface Props {
    country: IState["people"]
    setCountry: React.Dispatch<React.SetStateAction<IState["people"]>>;
    loading: boolean
    nPages: number
    currentPage: number
    setCurrentPage: (value: number) => void
}

const Tablebottom: React.FC<Props> = ({
    nPages,
    currentPage,
    setCurrentPage
}) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (
        <div className='h-[50px] bg-[#374151] rounded-b-lg flex items-center justify-center'>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px mt-[3.5px]">
                    <li>
                        <a
                            href="#"
                            className="block px-2 py-2 ml-0 leading-tight  rounded-l-lg border-solid border-[1px] bg-gray-800 border-gray-500 text-gray-400 hover:bg-gray-700 hover:text-white"
                            onClick={prevPage}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                >
                                </path>
                            </svg>
                        </a>
                    </li>

                    {
                        pageNumbers.map((pgNumber, index) => (
                            <li key={index}>
                            <a
                                href="#"
                                className={`px-[7.5px] py-[9px] leading-tight border bg-gray-800 border-gray-500 text-gray-400  hover:bg-gray-700 hover:text-white text-[14.5px] duration-500 ${currentPage == pgNumber ? 'bg-gray-500 text-white' : ''}`}
                                onClick={()=>setCurrentPage(pgNumber)}
                                >
                                {pgNumber}
                            </a>
                        </li>
                        ))
                    }
                   
                    <li>
                        <a
                            href="#"
                            className="block px-2 py-2 leading-tight border dark:bg-gray-800 border-gray-500 text-gray-400 hover:bg-gray-700 hover:text-white rounded-r-lg"
                            onClick={nextPage}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Tablebottom
