import React from 'react'
import {Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { PiMoonLight, PiSunLight } from 'react-icons/pi';

const Toggle = () => {
   const {theme, setTheme} = useTheme()

   const toggleBtn = () => {
      const body = document.body;
      setTheme(prev => prev === "light" ? "dark" : "light")
     
      body.classList.add("theme-transition")

      setTimeout(()=> body.classList.remove("theme-transition"), 800)
   }

   return (
      <div>
         <button onClick = {toggleBtn} className = " ml-auto hover:cursor-pointer">
               {
                  theme === "light" ? <PiMoonLight className="text-2xl hover:opacity-80"/> : <PiSunLight className="text-2xl hover:opacity-90" />
               } 
         </button>
         
      </div>
   )
}

export default Toggle
