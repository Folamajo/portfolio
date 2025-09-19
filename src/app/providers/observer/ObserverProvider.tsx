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
   // Strorage ref allows us to remember which element is linked to which callback function 

   const intersectionObserverRef = useRef<IntersectionObserver | null >(null)
   // intersectionObserverRef will allows us to hold the actual intersectObserver
   
   
   const observerValue:Payload = {
      register : (element, callback)=>{
         if(intersectionObserverRef.current == null){
            let observer = new IntersectionObserver((entries)=>{

               entries.forEach(entry => {
                  if

               })
               // for (let entry of entries){
               //    if(storageRef.current.get(entry.target)){

               //    }
               // }
            }, {})
            intersectionObserverRef.current = observer
         }
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