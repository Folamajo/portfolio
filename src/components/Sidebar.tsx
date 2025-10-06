"use client"
import React from 'react'
import { useSidebar } from '@/app/context/SidebarProvider'
const Sidebar = () => {

   const { isSidebarOpen, close} = useSidebar()

   const closeSidebar = (event: React.MouseEvent<HTMLDivElement>)=> {
      if (event.target !== event.currentTarget){
         return
      }
      close()
   }
  return (
   <>
   {
      isSidebarOpen ?
         (
            <div className = "overlay fixed border-2  w-full h-screen bg-black opacity-40 top-0 z-80" onClick={closeSidebar}>
               <div className="w-[20em] border bg-white h-full z-99 opacity-100">

               </div>
            </div>
         ): null
   }
   </>
  )
}

export default Sidebar
