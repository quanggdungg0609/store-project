"use client"
import React, {useState} from 'react'
import { motion, AnimatePresence  } from "framer-motion"
import Image from "next/image"

//components
import Login from '../Login/Login'
import Register from '../Register/Register'
//Assets
import Logo from '../../../../../public/assets/logo.png'


import { Dancing_Script, Comfortaa } from 'next/font/google'

const stateVariant={
    initial:{opacity:0},
    hidden:{
        opacity:1,
        transition:{
            delay:0.5,
            duration:0.5,
        }
    },
    exit:{
        opacity:0,
        scale:0,
        transition:{
            duration:0.5,
        }
    }
}

// font for Header
const DancingScriptFont= Dancing_Script({
    weight:'400',
    subsets :['vietnamese'],
})
//font for content
const ComfortaaFont=Comfortaa({
    weight:'400',
    subsets:['vietnamese']
})


const FormSection = () => {
    const [formState, setFormState]=useState<string>("login")
    

    function changeState():void{
        if (formState==="login"){
            setFormState("register")
        }else{
            setFormState("login")
        }
    }
    return (
        <section 
            className=" bg-gradient-to-b from-pink-pastel-200 from-30% via-copper-rust-300 to-pink-pastel-400
                        w-3/5 h-4/5 max-h-[480px] max-w-[720px] min-h-[480px] min-w-[720px] rounded-2xl shadow-2xl 
                        border border-copper-rust-600
                        flex flex-row  items-center px-4">
                <motion.div
                    layout
                    style={{
                        order: formState==="login"?1:2
                    }}
                    transition={{ type:"spring", duration:2, damping:15, staggerChildren:0.5}}
                    className=" bg-milano-red-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40
                                w-3/6 h-[110%] rounded-lg shadow-2xl z-20
                                flex flex-col justify-center items-center"
                    id='choose-form-section'
                    
                > 
                        {formState==="login"?
                            
                                <Login/>
                                :
                                <Register changeState={changeState}/>
                            
                        }

                </motion.div>

                <motion.div 
                    layout
                    style={{
                        order: formState==="login"?2:1
                    }}

                    transition={{ type:"spring", duration:2, damping:15}}
                    className="w-3/6 pl-4"
                    id="form-section"
                > 
                    <div
                        className="flex flex-col items-center justyfi-center"
                    >
                        <h1 
                            className={`${DancingScriptFont.className} text-5xl italic text-copper-rust-900 select-none cursor-default drop-shadow-xl`}

                        >DH Paris
                        </h1>
            
                        <Image 
                                    src={Logo}
                                    alt='logo'
                        />
                        
                        
                            { formState==="login"?
                                <p  
                                    onClick={()=>{changeState()}}
                                    className={`${ComfortaaFont.className} text-xs cursor-pointer text-copper-rust-800 hover:text-copper-rust-500 select-none`}
                                > Bạn chưa có tài khoản?
                                </p>
                            :
                                <p  
                                    onClick={()=>{changeState()}}
                                    className={`${ComfortaaFont.className} text-xs cursor-pointer text-copper-rust-800  hover:text-copper-rust-500 select-none`}
                                > Quay trở lại đăng nhập
                                </p>
                            }
                        
                       
                    </div>
                </motion.div>
        </section>
    )
}

export default FormSection