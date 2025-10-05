import React, { ReactNode, useContext, useState } from 'react'
import { createContext } from "react";


type SidebarConfig = {
   isSidebarOpen: boolean;
   toggle : () => void
   close : () =>void
}

export const SidebarContext = createContext<SidebarConfig>({isSidebarOpen: false, toggle: () => {}, close: () => {}})


const SidebarProvider = ({children} : {children: ReactNode})  => {
   const[isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

   const toggle = () => {
      setIsSidebarOpen(prev => !prev)
   }

   const close = () => {
      setIsSidebarOpen(false)
   }


   return (
      <SidebarContext.Provider value = {{isSidebarOpen, toggle, close}}>
         {children}   
      </SidebarContext.Provider>
   )
}



export const useSidebar = () => {
   const sideBar = useContext(SidebarContext)
   return sideBar
}
export default SidebarProvider

// Contextname: Sidebar
// isSideBarOpen: boolean, toggle(): void, close(): void
// default starts false; togle/close are no-ops if no provider





// ProviderName = SidebarProvider
// responsibility = provide the ability to toggle a state true or false which allows us to open and close our side bar 
// stateField = isSideBarOpen 
// Actions Exposed = toggle() allows us to toggle the state opening and closing the Sidebar
// Who needs it ? Neeed by all components


// context shape?
// isSideBarOpen this is a type which holds a boolean
// Toggle() allows us to change our isSidebaropen state value 
// close() ()=> void explicitly sets states to false
// Default behaviour should allows the sidebar to auto close when navagation and also when an area outside of the side bar is clicked. 









// import React, { useState } from 'react'
// import { createContext, ReactNode } from 'react';

// type SidebarBoolean = {
//    openSidebar : boolean;
// }

// export const SidebarContext = createContext<SidebarBoolean | undefined>(undefined)
// const SidebarProvider = ({children} : {children: ReactNode}) => {

//    const [openSidebar, setOpenSidebar] = useState<boolean>(false)

//    return (
//       <SidebarContext.Provider value ={[openSidebar, setOpenSidebar]}>
//          {children}
//       </SidebarContext.Provider>
//    )
// }

// export default SidebarProvider
