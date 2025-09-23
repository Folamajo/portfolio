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
   // console.log(observer?.isInView)


   return (
         <div className=' border flex flex-col items-center w-full bg-white text=black dark:bg-gray-800 dark:text-white transition-all duration-300'>         
            <div ref = {elementToObserveRef} className="border border-dashed ">
               <Name pageName={pageName}/>
            </div>
            
            <Menu setPageName={setPageName}/>
         </div>
   )
}

export default Header
