"use client"
import React from 'react'
import { useSidebar } from '@/app/context/SidebarProvider'
import Link from 'next/link'
import Toggle from './Header/Toggle'
import { TfiClose } from "react-icons/tfi";

const Sidebar = () => {

   const { isSidebarOpen, close} = useSidebar()
   console.log(isSidebarOpen)
   const closeSidebar = (event: React.MouseEvent<HTMLDivElement>)=> {
      if (event.target !== event.currentTarget){
         return;
      }
      close()
   }
  return (
   <>
   
    {/*${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} */}
      {/* transition-transform duration-300 ease-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} */}
         
      <div className = {`overlay fixed   w-full h-screen bg-black/50 top-0 z-[80] transition-opacity duration-1500 ease-in-out ${isSidebarOpen ?  "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"}`} onClick={closeSidebar}>
        
      </div>
       <div className={`overlay_content w-[22em] fixed left-0 bg-white h-full z-99 opacity-100 dark:bg-[#222] transition-transform duration-900 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full "}`}>
               <div className=' pl-4 pr-6 py-3 flex border-b border-b-gray-300 dark:border-b-gray-500'>

                  <div className="  mr-auto">
                     <h1 className='text-2xl font-bold tracking-tight hover:opacity-90'>
                        <Link href="/">
                           Fola Majoyegbe
                        </Link>
                     </h1>
                  </div>
               

                  <div className=' ml-auto flex justify-center items-center w-[4em] mt-1 gap-6' >
                     <div className=" mb-1 w-8 text-center h-6"><Toggle /></div>
                     <div className=" h-6 mb-1 text-center">
                        <TfiClose className="text-xl cursor-pointer mt-0.5 hover:opacity-80" onClick={close}/> 
                     </div>
                  </div>      
               </div>


               <div className="mt-10 px-4">

                     <h1 className="text-lg font-bold tracking-tight">SECTIONS</h1>
                     <ul className='flex gap-2  flex-col mt-4 text-md tracking-tight'>
                  <li className= "hover:opacity-70">
                     <Link href='/about' 
                     >About</Link>
                  </li>
                  <li className= "hover:opacity-70">
                     <Link href='/projects'   
                     >Projects</Link>
                  </li>
                  <li className= "hover:opacity-70">
                     <Link href='/blog'
                     >Blog</Link>
                  </li>
                  <li className= "hover:opacity-70">
                     <Link href='/connect'
                     >Connect</Link>
                  </li>
                  <li className= "hover:opacity-70">
                     <Link href='/now'
                     >Now</Link>
                  </li>
               </ul>
            </div>

         </div>
   </>
  )
}

export default Sidebar
