import React from 'react'
import {Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const Toggle = () => {
   const {theme, setTheme} = useTheme()
   console.log(theme)
   return (
      <div>
         <button onClick = {()=> setTheme(prev => prev === "light" ? "dark": "light")}className = " ml-auto hover:cursor-pointer">
               {
                  theme === "light" ? <Moon /> : <Sun />
               } 
         </button>
         
      </div>
   )
}

export default Toggle
