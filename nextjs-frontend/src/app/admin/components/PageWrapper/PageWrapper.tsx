"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const PageWrapper= ({children,}:{children:React.ReactNode}) => {
  return (
        <motion.div className="h-full w-full bg-cornflower-blue-200 rounded-s-[50px]
                        bg-gradient-to-br from-copper-rust-300 via-copper-rust-400 to-waikawa-gray-300
                        bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 
                        shadow-[-16px_0px_50px_rgba(0,0,0,0.3)] p-3"
                    initial={{ 
                        opacity:0,
                        x:400
                    }}
                    animate={{
                        opacity:1,
                        x:0
                    }}
                    exit={{
                        opacity:1,
                        x:400
                    }}
                    transition={{type:"spring",duration:0.5}}
        >
            {children}
        </motion.div>

  )
}

export default PageWrapper