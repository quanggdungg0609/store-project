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
        <section className="flex flex-row w-screen h-screen
                            
        ">
            <Navbar/>
                <div className='w-full h-screen'>
                    {children}
                </div>

            

        </section>
    )
}