'use client'
import React, { useContext, useEffect, useState } from 'react'
import Menu from './Menu'
import Name from './Name'
import Menu_Two from './Menu_Two'

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
      
   }, [observer])


   return (
         <div className='  flex flex-col items-center w-full transition-all duration-300 border-b border-b-gray-300 dark:border-b-gray-700 ' >         
            <div ref = {elementToObserveRef} className="main_menu w-full ">
               <Name pageName={pageName}/>
            </div>
            <div className={!observer?.isInView ? "fixed  w-full border-b bg-white border-b-gray-300 dark:border-b-gray-500  dark:bg-[#2a2a2a] main_menu" : "" }>
               <Menu setPageName={setPageName}/>
            </div>
            <div className="fixed menu_two w-full border-b bg-white border-b-gray-300 dark:border-b-gray-500  dark:bg-[#2a2a2a]">
               <Menu_Two />
            </div>
            
         </div>
   )
}

export default Header
