"use client"
import FormSection from "./components/FormSection/FormSection"
import { motion } from "framer-motion"
export default function SignIn(){


    return (
        <motion.main 
            className=" flex justify-center items-center w-screen h-screen"
                initial={{y:50, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.6, delay:0.3, delayChildren: 0.3, staggerChildren: 0.05}}
        >
            
            <FormSection/>  

        </motion.main>
    )
}