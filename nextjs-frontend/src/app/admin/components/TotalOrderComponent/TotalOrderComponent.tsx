import React from 'react'
import { FcViewDetails } from "react-icons/fc"

const TotalOrderComponent = () => {
  return (
        <div className='w-1/3 min-w-[400px] max-w-[402px] h-full bg-waikawa-gray-100 rounded-3xl p-4
                        flex flex-row justify-center items-center shadow-2xl'
        >
            <div className='flex flex-col justify-center gap-2 w-[250px]'>
                <h1 className='text-milano-red-400 text-2xl'>Tổng đơn hàng</h1>
                <p className='text-xl'>20</p>
            </div>
            <div className='w-[100px] h-[100px] bg-milano-red-400 rounded-3xl p-4
                            flex justify-center items-center'
            
            >
                <FcViewDetails size={80} 
                            className='drop-shadow-md'
                />
            </div>
        </div>

  )
}

export default TotalOrderComponent