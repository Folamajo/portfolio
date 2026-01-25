"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

import Link from 'next/link';
import Toggle from './Toggle';

type NameProps = {
   pageName: string
}

const Name = ({ pageName } : NameProps) => {
   const pathName= usePathname()
   const cleanedPathName = pathName.replace("/", "" )


   

   return (
      <div>
         <div className=' pt-4 px-4 flex items-center justify-between  max-w-[58em] relative mx-auto'>
            <div className=' flex w-[21em]'>
               <p className=" font-bold text-[0.95em]"><Link href="/">fola</Link>@website {cleanedPathName ? cleanedPathName : '~'} %</p>  <p className="ml-1  font-bold text-[0.95em]">{pageName}</p> <div className='blinking_cursor '></div> 
            </div>

            <div className=" absolute  flex left-1/2 transform -translate-x-1/2">
               <h1 className='text-3xl font-extrabold tracking-tight'>
                  <Link href="/">
                     Fola Majoyegbe
                  </Link>
               </h1> 
            </div>
            

            <div className=' ml-auto ' >
               <Toggle />
            </div>
         </div>

      </div>

   )
}

export default Name
