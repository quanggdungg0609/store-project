import React from 'react'
import { FcSalesPerformance } from "react-icons/fc"

const InterestComponent = () => {

    let interest:number= 1900000
    let interestFormated:string= interest.toLocaleString('en-us', {minimumFractionDigits:0})
    return (
        <div className='w-1/3  h-full bg-waikawa-gray-100 rounded-3xl p-4
                        flex flex-row justify-center items-center shadow-2xl'
        >
            <div className='flex flex-col justify-center gap-2 w-[250px]'>
                <h1 className='text-waikawa-gray-600 text-2xl'>Tổng Lãi</h1>
                <p className='text-xl'>{interestFormated} vnd</p>
            </div>
            <div className='w-[100px] h-[100px] bg-waikawa-gray-500 rounded-3xl p-4
                            flex justify-center items-center'
            
            >
                <FcSalesPerformance size={80} 
                            className='drop-shadow-md'
                />
            </div>
        </div>
    )
}

export default InterestComponent