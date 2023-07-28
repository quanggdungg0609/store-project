import type { Metadata } from 'next'


import "./dashboard.css"
import Navbar from "./components/Navbar/Navbar"

export const metadata: Metadata = {
    title: 'DH Paris | Admin'
  }

export default function AdminLayout({children,}: { children: React.ReactNode}){
    return(
        <section className="flex flex-row main-admin w-screen h-screen">
            <Navbar/>
            <div className='w-full h-screen'>
                {children}
            </div>
        </section>
    )
}