"use client"
import React, {useState} from 'react'
import Image from "next/image"
import {AnimatePresence, motion} from "framer-motion"
// components
import Login_M from '../Login_M/Login_M'
import Register_M from '../Register_M/Register_M'
//logo
import Logo from "../../../../../public/assets/logo2.png"

// font for Header



const FormSectionMobile = () => {
  const [formState, setFormState]=useState<string>("login")

  function changeState(){
    switch (formState){
      case "login":
        setFormState("register")
        break
      case "register":
        setFormState("login")
        break
      default:
        setFormState("login")
    }
  }

  return (
    <motion.div 
        className={` w-full ${formState==="login"?'h-2/3':'h-4/5'} flex flex-col items-center py-3 mx-5 rounded-3xl
                    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-copper-rust-600 shadow-2xl`}
        layout

    >
            <Image  src={Logo}
                    alt="Logo"
                    width={150}
                    
                    
            />
            {
              formState==="login"?
                
                  <Login_M changeState={changeState}/>

                :

                  <Register_M changeState={changeState}/>

           }
            
    </motion.div>
  )
}

export default FormSectionMobile