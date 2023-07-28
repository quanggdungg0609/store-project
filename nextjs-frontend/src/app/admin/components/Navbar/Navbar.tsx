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
      <div className="flex flex-col h-screen w-1/6 items-center pt-4 px-2 max-w-[200px] min-w-[200px]
                      
      ">
         <Image src={Logo}
                alt='logo'
                width={150}
                className='drop-shadow-sm mx-2 mb-16'
          />

          <div className='flex items-start w-full select-none'>
            <ul className={`${MitrFont.className} w-full flex flex-col gap-8 items-start text-copper-rust-700 text-lg subpixel-antialiased uppercase`}>
              {adminRoute.map((item)=>{
                return(
                  <motion.li
                    key={item.text} 
                    
                    initial={{ backgroundColor: "transparent", x: 0 }}
                    animate={{
                      backgroundColor: isActive(item.route) ? "#8d273e" : "transparent",
                      borderRadius:"20px",
                      x: isActive(item.route) ? 15 : 0,
                    }}
                    className='p-3 drop-shadow-lg'
                  >
                   <Link  href={item.route}
                          className={`w-full h-[40px] relative ${isActive(item.route) &&"text-copper-rust-200"}`}
                          
                    >
                      <FontAwesomeIcon icon={item.icon} size='lg' className={`ml-1 mr-2 `}/>
                      <span className={``}>{item.text}</span>
            
                    </Link>
                  </motion.li>
                )
              })}
              
            </ul>
          </div>
          <h2 className={`${MitrFont.className} absolute bottom-8 left-7 flex flex-row
                           text-copper-rust-700 subpixel-antialiased uppercase text-lg 
                           drop-shadow-md leading-tight cursor-pointer select-noneS`}
          >
            <FontAwesomeIcon icon={faRightFromBracket} size='lg' className='mr-2'/> 
            Log out
          </h2>
      </div>
    )
}

export default Navbar