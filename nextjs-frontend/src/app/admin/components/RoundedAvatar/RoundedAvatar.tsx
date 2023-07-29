import React from 'react'
import Image from "next/image"
interface RoundedAvatarProps{
    image:any
}
const RoundedAvatar = ({image}:RoundedAvatarProps) => {

    return (
    <div className='rounded-full w-[40px] h-[40px] shadow-2xl'>
        <Image src={image}
                alt="avatar" 
                width={40} 
                height={40}
                className='rounded-full drop-shadow-md'
        />

    </div>
  )

}


export default RoundedAvatar