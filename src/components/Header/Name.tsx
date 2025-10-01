"use client"
import { usePathname } from 'next/navigation'
import React, { SetStateAction, useState } from 'react'
import { BiMoon } from "react-icons/bi";
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Toggle from './Toggle';
// type NameProps ={
//    setPageName: React.Dispatch<React.SetStateAction<string>>
// }
type NameProps = {
   pageName: string
}

const Name = ({ pageName } : NameProps) => {
   const pathName= usePathname()
   const cleanedPathName = pathName.replace("/", "" )
   const {theme, setTheme} = useTheme()

   

   return (
      <div className=' p-2 flex items-center justify-between  w-[60em] relative '>
         <div className=' flex w-[18em]'>
            <p>fola@website {cleanedPathName ? cleanedPathName : '~'} %</p>       <p className="ml-2">{pageName}</p> <div className='blinking_cursor '></div> 
         </div>

         <div className=" absolute  flex left-1/2 transform -translate-x-1/2">
           <h1 className='text-4xl font-black '>
               <Link href="/">
                  Fola Majoyegbe
               </Link>
            </h1> 
         </div>
         

         <div className=' ml-auto ' >
            <Toggle />
         </div>
      </div>
   )
}

export default Name
