"use client"

import React, { useState } from 'react'
import {motion, AnimatePresence} from "framer-motion"

import Register from '../Register/Register'

const changeFormVariant={
    signin:{
        order:1
    },
    signup:{
        order:2
    }
}
const FormSection = () => {
    const [formState, setFormState]= useState<boolean>(true)

    function changeFormState(){
        setFormState(!formState)
    }

    
    return (
        <div
            className="flex flex-row w-1/2 h-4/6 max-h-96 gap-2"
        >   
            <motion.div 
                    className="flex flex-col bg-slate-500 w-2/6 h-full z-20 p-3 overflow-hidden"
                    style={{
                        order:formState ? 1: 2
                    }}
                    layout
                    transition={{ type:"spring", duration:1, damping: 15}}
            >
                    <button onClick={()=>changeFormState()}> {formState ? "Register": "Login"}</button>
            </motion.div>

            <motion.div 
                className="flex flex-col bg-slate-400 w-4/6 h-full z-10"
                style={{
                    order:formState ? 2: 1
                }}
                layout
                transition={{ type:"spring",  duration:1, damping: 15}}

            >
                <Register/>
            </motion.div>


        </div> 
    )
}

export default FormSection