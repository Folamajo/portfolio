"use client"
import React from 'react'
import { useSidebar } from '@/app/context/SidebarProvider'
import Link from 'next/link'
import Toggle from './Header/Toggle'
const Sidebar = () => {

   const { isSidebarOpen, close} = useSidebar()

   const closeSidebar = (event: React.MouseEvent<HTMLDivElement>)=> {
      if (event.target !== event.currentTarget){
         return;
      }
      close()
   }
  return (
   <>
   {
      isSidebarOpen ?
         (
            <div className = "overlay fixed   w-full h-screen bg-black/40 top-0 z-80" onClick={closeSidebar}>
               <div className="w-[22em]  bg-white h-full z-99 opacity-100">
            
                  <div className=' px-6 py-3 flex border-b-1 border-b-gray-300'>


                     <div className="  mr-auto">
                        <h1 className='text-2xl font-bold tracking-tight'>
                           <Link href="/">
                              Fola Majoyegbe
                           </Link>
                        </h1>
                     </div>
               

                     <div className=' ml-auto ' >
                        <Toggle />
                     </div>      
                  </div>

               </div>
            </div>
            
         ): null
   }
   </>
  )
}

export default Sidebar
