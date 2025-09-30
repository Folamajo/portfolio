'use client'
import React, { useContext, useEffect, useState } from 'react'
import Menu from './Menu'
import Name from './Name'
import { usePathname } from 'next/navigation'
import { ObserverContext } from '@/app/context/ObserverProvider'
import { useRef } from 'react'


const Header = () => {

   const observer = useContext(ObserverContext)
   const elementToObserveRef = useRef<HTMLDivElement | null>(null)
   const [pageName, setPageName] = useState<string>("")

   useEffect(()=> {
      if(elementToObserveRef.current !== null){
         observer?.observe(elementToObserveRef.current)
      }
      
   }, [])


   return (
         <div className='  flex flex-col items-center w-full transition-all duration-300 border-b border-b-gray-300 dark:border-b-gray-700 ' >         
            <div ref = {elementToObserveRef} className=" ">
               <Name pageName={pageName}/>
            </div>
            <div className={!observer?.isInView ? "fixed  w-full border-b bg-white border-b-gray-300 dark:border-b-gray-500  dark:bg-[#2a2a2a]" : "" }>
               <Menu setPageName={setPageName}/>
            </div>
            
         </div>
   )
}

export default Header
