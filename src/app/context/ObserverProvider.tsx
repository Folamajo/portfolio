import React, {createContext, useRef, ReactNode, useState} from 'react'


type IntersectionConfig = {
   observe : (element: Element) => void;
}
const ObserverContext = createContext<IntersectionConfig, boolean,  undefined, boolean>(undefined);

const ObserverProvider = ({children} : {children: ReactNode}) => {

   const [isInView, setIsInView] = useState<boolean>(true)

   const callback: IntersectionObserverCallback = () => {}

   const intersectionOperation: IntersectionConfig = {
      observe: (element:Element) => {
         if (intersectionObserverRef.current === null){
            const intersectionObserver = new IntersectionObserver(callback);
            intersectionObserverRef.current = intersectionObserver;

            intersectionObserver.observe(element);
         }
         else{
            intersectionObserverRef.current.observe(element);
         }
         return
      }
   }

   const intersectionObserverRef= useRef<IntersectionObserver | null>(null)

   return (
      <ObserverContext.Provider value = {intersectionOperation, isInView}>
         {children}
      </ObserverContext.Provider>
   )
}

export default ObserverProvider




   // const observerInstanceRef = useRef(null)