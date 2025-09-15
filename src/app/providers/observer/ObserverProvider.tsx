import React from 'react'
import { createContext } from 'react'

type Payload = {
   register: (element: Element, callback: (entry: IntersectionObserverEntry) => void) => void;
   unregister: (element: Element) => void
}

const ObserverContext = createContext<Payload | undefined>(undefined)

const ObserverProvider = ({children} : any) => {
   const observerValue:Payload = {register(element, callback), unregister(element)}



  return (
    
      <ObserverContext.Provider value={observerValue}>
         {children}
      </ObserverContext.Provider>
  )
}

export default ObserverProvider