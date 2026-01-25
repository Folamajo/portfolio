"use client"

import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import { usePathname } from 'next/navigation';

type SidebarConfig = {
   isSidebarOpen: boolean;
   toggle : () => void
   close : () =>void
}

export const SidebarContext = createContext<SidebarConfig>({isSidebarOpen: false, toggle: () => {}, close: () => {}})


const SidebarProvider = ({children} : {children: ReactNode})  => {
   const[isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
   const [windowWidth, setWindowWidth] = useState<number>(0)

   useEffect(()=> {
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return ()=> window.removeEventListener("resize", handleResize)
   }, [])
   

   useEffect(()=> {
      if(windowWidth > 991){
         setIsSidebarOpen(false)
      }
   }, [windowWidth])




   const toggle = () => {
      setIsSidebarOpen(prev => !prev)
   }

   const close = () => {
      setIsSidebarOpen(false)
   }

   const pathname = usePathname()
   useEffect(()=>{
      if( isSidebarOpen === true){
         close()
      }
   }, [pathname, isSidebarOpen])



   return (
      <SidebarContext.Provider value = {{isSidebarOpen, toggle, close}}>
         {children}   
      </SidebarContext.Provider>
   )
}



export const useSidebar = () => {
   const sideBar = useContext(SidebarContext)
   return sideBar;
}
export default SidebarProvider


