"use client"
import { usePathname } from 'next/navigation'
import React, { SetStateAction, useState } from 'react'
import { BiMoon } from "react-icons/bi";
import { useTheme } from 'next-themes';
import Link from 'next/link';
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
   // const [pageName, setPageName] = useState<string>("")
   

   return (
      <div className='border p-2 flex items-center justify-between  w-full relative'>
         <div className=' flex w-[18em]'>
            <p>fola@website {cleanedPathName ? cleanedPathName : '~'} %</p> <p>{pageName}</p> <p></p><div className='blinking_cursor'></div> 
         </div>
         <div className=" absolute  flex left-1/2 transform -translate-x-1/2">
           <h1 className='text-4xl font-black '>
               <Link href="/">
                  Fola Majoyegbe
               </Link>
            </h1> 
         </div>
         

         <div className=' ml-auto ' >
            <button className = "border ml-auto">
               {theme}
            </button>
         </div>
      </div>
   )
}

export default Name
