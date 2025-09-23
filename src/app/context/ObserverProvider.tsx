"use client"
import React, {createContext, useRef, ReactNode, useState, useEffect} from 'react'


type IntersectionConfig = {
   observe : (element: HTMLDivElement) => void;

   isInView?: boolean;
}
export const ObserverContext = createContext<IntersectionConfig | undefined>(undefined);

const ObserverProvider = ({children} : {children: ReactNode}) => {

   const [isInView, setIsInView] = useState<boolean>(true)

   const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting){
            setIsInView(true)
         }
         else{
            setIsInView(false)
         }
      })
   }

   const intersectionOperation: IntersectionConfig = {
      observe: (element:HTMLDivElement) => {
         if (intersectionObserverRef.current === null){
            const intersectionObserver = new IntersectionObserver(callback);
            intersectionObserverRef.current = intersectionObserver;

            intersectionObserver.observe(element);
         }
         else{
            intersectionObserverRef.current.observe(element);
         }
         return
      },

      isInView: isInView
   }




   const intersectionObserverRef= useRef<IntersectionObserver | null>(null)


   useEffect(()=> {

      return () => {
         intersectionObserverRef.current?.disconnect()
         intersectionObserverRef.current = null
      }
   }, [])



   return (
      <ObserverContext.Provider value = { intersectionOperation }>
         {children}
      </ObserverContext.Provider>
   )
}

export default ObserverProvider




   // const observerInstanceRef = useRef(null)