import React from 'react'
import {Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { PiMoonLight, PiSunLight } from 'react-icons/pi';

const Toggle = () => {
   const {theme, setTheme} = useTheme()
   console.log(theme)
   return (
      <div>
         <button onClick = {()=> setTheme(prev => prev === "light" ? "dark": "light")} className = " ml-auto hover:cursor-pointer">
               {
                  theme === "light" ? <PiMoonLight className="text-2xl hover:opacity-80"/> : <PiSunLight className="text-2xl hover:opacity-90" />
               } 
         </button>
         
      </div>
   )
}

export default Toggle
