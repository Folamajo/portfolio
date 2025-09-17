"use client"

import React, { useRef } from 'react'
import { createContext } from 'react'


type Payload = {
   register: (element: Element, callback: (entry: IntersectionObserverEntry) => void) => void;
   unregister: (element: Element) => void
}

const ObserverContext = createContext<Payload | undefined>(undefined)

const ObserverProvider = ({children} : any) => {

   const storageRef = useRef<Map<Element, (entry: IntersectionObserverEntry) => void>>(new Map());
   const intersectionObserverRef = useRef<IntersectionObserver | null >(null)
   
   
   const observerValue:Payload = {
      register : (element, callback)=>{
         return
      }, 
      unregister: (element)=>{
         return
      }
   }

  return (
    
      <ObserverContext.Provider value={observerValue}>
         {children}
      </ObserverContext.Provider>
  )
}

export default ObserverProvider