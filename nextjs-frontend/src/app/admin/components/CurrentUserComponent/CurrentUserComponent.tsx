"use client"
import React, {useState} from 'react'
import { Be_Vietnam_Pro } from 'next/font/google'
import { CgProfile, CgLogOut, CgChevronUp, CgChevronDown } from 'react-icons/cg'
import { motion, AnimatePresence } from "framer-motion"
//sample avatar
import Avatar from "./unnamed.jpg"
import RoundedAvatar from '../RoundedAvatar/RoundedAvatar'


const BeVietnamProRegular= Be_Vietnam_Pro({
    weight:"600",
    subsets:['vietnamese']
})

const BeVietnamProLight= Be_Vietnam_Pro({
    weight:"200",
    subsets:['vietnamese']
})
const CurrentUserComponent = () => {
    const [showMenu, setShowMenu]= useState<boolean>(false) 
    return (
        <>
            

            <div className={`absolute h-[px] bottom-4 left-3 right-3
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
                            <li className={`${BeVietnamProLight.className}
                                            hover:bg-copper-rust-400 w-full p-3 rounded-t-xl 
                                            text-lg px-4 
                                            hover:text-copper-rust-100 flex flex-row items-center gap-2`}
                            >
                                                <CgProfile/> Hồ sơ
                            </li>
                            <li className={`${BeVietnamProLight.className}
                                            hover:bg-copper-rust-400 w-full p-3 rounded-b-xl 
                                            text-lg px-4 
                                            hover:text-copper-rust-100 flex flex-row items-center gap-2`}
                            > 
                                            <CgLogOut/>
                                            Logout
                            </li>
                        </ul>
                    </motion.div>
                    }

                </AnimatePresence>
                <div className='flex flex-row items-center gap-2 text-copper-rust-800 hover:text-copper-rust-600 rounded-2xl p-1 cursor-pointer select-none'
                    onClick={()=>{setShowMenu(!showMenu)}}
                >
                    <RoundedAvatar image={Avatar}/>    
                    <h1 className={`${BeVietnamProRegular.className}   drop-shadow-md`}>Koi Chuot</h1>
                    <motion.div 
                        initial={{rotate: !showMenu? 0:180}}
                        animate={{rotate: !showMenu? 0:180}}
                    >
                        <CgChevronUp/>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default CurrentUserComponent