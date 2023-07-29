"use client"
import React, {useState} from 'react'
import { Be_Vietnam_Pro } from 'next/font/google'
import { CgProfile, CgLogOut } from 'react-icons/cg'
import { motion, AnimatePresence } from "framer-motion"
//sample avatar
import Avatar from "./unnamed.jpg"
import RoundedAvatar from '../RoundedAvatar/RoundedAvatar'


const BeVietnamProFont= Be_Vietnam_Pro({
    weight:"600",
    subsets:['vietnamese']
})
const CurrentUserComponent = () => {
    const [showMenu, setShowMenu]= useState<boolean>(true) 
    return (
        <>
            

            <div className={`absolute h-[px] bottom-4 left-2 right-4
                             rounded-xl items-center p-2 
                            `}
                
            >
                <AnimatePresence>
                    {showMenu &&
                    <motion.div className='flex flex-col gap-2 mb-3 border rounded-xl shadow-2xl cursor-pointer
                                    border-copper-rust-400 '
                                initial={{opacity:0, y:20}}
                                animate={{opacity:1, y:0}}
                                exit={{opacity:0, y:20}}
                    >
                        <ul className='gap-2 w-full'>
                            <li className='hover:bg-copper-rust-400 w-full p-3 rounded-t-xl text-lg px-4 hover:text-copper-rust-100 flex flex-row items-center gap-2'><CgProfile/> Hồ sơ</li>
                            <li className='hover:bg-copper-rust-400 w-full p-3 rounded-b-xl text-lg px-4 hover:text-copper-rust-100 flex flex-row items-center gap-2'> <CgLogOut/>Logout</li>
                        </ul>
                    </motion.div>
                    }

                </AnimatePresence>
                <div className='flex flex-row items-center gap-3 hover:drop-shadow-[5px_5px_20px_rgb(141,39,6)] peer rounded-2xl p-3 cursor-pointer select-none'
                    onClick={()=>{setShowMenu(!showMenu)}}
                >
                    <RoundedAvatar image={Avatar}/>    
                    <h1 className={`${BeVietnamProFont.className} peer-hover:text-copper-rust-500 text-copper-rust-800  drop-shadow-md`}>Koi Chuot</h1>

                </div>
            </div>
        </>
    )
}

export default CurrentUserComponent