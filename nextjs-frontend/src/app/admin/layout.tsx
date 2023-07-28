// "use client"
import type { Metadata } from 'next'
import { useRouter } from 'next/router'

import "./dashboard.css"
import Navbar from "./components/Navbar/Navbar"
import PageWrapper from './components/PageWrapper/PageWrapper'
import { motion,AnimatePresence } from 'framer-motion'

export const metadata: Metadata = {
    title: 'DH Paris | Admin'
  }

export default function AdminLayout({children,}: { children: React.ReactNode}){
    return(
        <section className="flex flex-row main-admin w-screen h-screen">
            <Navbar/>
            {/* <AnimatePresence mode="wait"> */}
                <div className='w-full h-screen'>
                    {children}
                </div>

            {/* </AnimatePresence> */}
            

        </section>
    )
}