"use client"
import { usePathname } from 'next/navigation'
import React, { SetStateAction, useState } from 'react'
import { BiMoon } from "react-icons/bi";
import { useTheme } from 'next-themes';
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
      <div className='p-2 flex  border w-full'>
         <div className='border flex items-center '>
            <p>fola@website {cleanedPathName ? cleanedPathName : '~'} % </p><p> {pageName}</p><div className='blinking_cursor'></div> 
         </div>
         <div className="mx-auto">
           <h1 className='text-4xl font-black '>Fola Majoyegbe</h1> 
         </div>
         

         <div className='border flex items-center ml-auto'>
            <button>
               {theme}
            </button>
         </div>
      </div>
   )
}

export default Name
