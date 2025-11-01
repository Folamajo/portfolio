import React from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebar } from '@/app/context/SidebarProvider';

const Menu_Two = () => {

   const { toggle } = useSidebar()

   
  return (
      <div>
         <div className=' px-4 py-3 flex max-w-[58em] mx-auto'>


               <div className="  mr-auto">
                  <h1 className='text-2xl font-bold tracking-tight'>
                     <Link href="/">
                        Fola Majoyegbe
                     </Link>
                  </h1>
               </div>
               

               <div className=' ml-auto ' >
                  <RxHamburgerMenu className="text-2xl cursor-pointer hover:opacity-80 " onClick={toggle}/>
               </div>
            </div>

         </div>
   )
}

export default Menu_Two

