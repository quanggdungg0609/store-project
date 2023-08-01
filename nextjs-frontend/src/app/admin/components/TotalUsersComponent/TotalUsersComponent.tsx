import React from 'react'
import { FcConferenceCall } from "react-icons/fc"


const TotalUsersComponent = () => {
  return (
    <div className='w-1/3  h-full bg-waikawa-gray-100 rounded-3xl p-4
                        flex flex-row justify-center items-center shadow-2xl'
      
        >
            <div className='flex flex-col justify-center gap-2 w-[250px]'>
                <h1 className='text-apple-500 text-2xl'>Số người dùng</h1>
                <p className='text-xl'>20</p>
            </div>
            <div className='w-[100px] h-[100px] bg-apple-500 rounded-3xl p-4
                            flex justify-center items-center'
            
            >
                <FcConferenceCall size={80} 
                            className='drop-shadow-md'
                />
            </div>
        </div>
  )
}

export default TotalUsersComponent