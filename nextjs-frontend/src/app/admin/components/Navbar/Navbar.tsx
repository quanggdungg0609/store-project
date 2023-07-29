"use client"

import React from 'react'
import Image from "next/image"
import {  Mitr } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


//to fix awesomefont icons to big when initate load
import "./Navbar.css"
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false

//logo
import Logo from "../../../../../public/assets/logo-no-background.svg"

//routes
import { adminRoute } from './route'
import CurrentUserComponent from '../CurrentUserComponent/CurrentUserComponent'

//font
const MitrFont=Mitr({
  weight:"500",
  subsets:['latin-ext']
})



const Navbar = () => {
    const pathName=usePathname()

    const isActive = (route:string) => {
      return pathName === route;
    };
    return (
      <div className="relative flex flex-col h-screen w-1/6 items-center pt-4 px-2 max-w-[200px] min-w-[200px]
                      
      ">
         <Image src={Logo}
                alt='logo'
                width={150}
                className='drop-shadow-sm mx-2 mb-16'
          />

          <div className='flex items-start w-full select-none'>
            <ul className={`${MitrFont.className} ml-2 w-full flex flex-col gap-8 items-start text-copper-rust-700 text-lg subpixel-antialiased uppercase`}>
              {adminRoute.map((item)=>{
                return(
                  <li
                    key={item.text}
                    className='relative flex justify-center items-center '
                  >
                   <Link  href={item.route}
                          className={`w-full h-[40px"}`}
                    >    
                      <motion.span animate={{color:pathName===item.route? "#fff": "#ab2b49"}}
                                  transition={{duration:0.35, ease:[0.43, 0.13, 0.23, 0.96], delay:0.05}}
                      >
                        <FontAwesomeIcon icon={item.icon} size='lg' className={`ml-1 mr-2`}/>
                        {item.text}
                      </motion.span>
                    </Link>
                    {pathName===item.route && 
                      <motion.div layoutId='underline' 
                                  className='absolute -z-10 -top-2  -left-1 w-[110%] h-[45px] bg-copper-rust-500 rounded-xl'
                                  transition={{type:'spring', bounce:0.25, duration:0.5}}>
                      </motion.div>}

                  </li>
                )
              })}
              
            </ul>
          </div>
            <CurrentUserComponent/>
      </div>
    )
}

export default Navbar