import React, { useContext } from 'react'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { PiMoonThin } from "react-icons/pi";
import { ObserverContext } from '@/app/context/ObserverProvider';
import Toggle from './Toggle';

type MenuProps ={
   setPageName: React.Dispatch<React.SetStateAction<string>>
}


const Menu = ({ setPageName } : MenuProps) => {
   const observer = useContext(ObserverContext)
   return (
      <div className= ' w-full flex justify-center items-center relative  '>
         <div className="w-[60em] relative flex justify-center items-center py-6">


         
            {
               !observer?.isInView ? <div className="absolute left-2 font-bold text-lg">Fola Majoyegbe</div> : ""
            }
            
             {/* <div className = "border border-dashed mr-auto">
               Fola Majoyegbe
             </div> */}


            <div className="  mx-auto absolute left-1/2 transform -translate-x-1/2">
               <ul className='flex gap-10'>
               <li className= "hover:opacity-70">
                  <Link href='/about' 
                        onMouseEnter={()=>setPageName('cd about')}
                        onMouseLeave={()=>setPageName("")}
                  >about<span>/</span></Link>
               </li>
               <li className= "hover:opacity-70">
                  <Link href='/projects'
                        onMouseEnter={()=>setPageName('cd projects')}
                        onMouseLeave={()=>setPageName("")}
                  >projects<span>/</span></Link>
               </li>
               <li className= "hover:opacity-70">
                  <Link href='/blog'
                        onMouseEnter={()=>setPageName('cd blog')}
                        onMouseLeave={()=>setPageName("")}
                  >blog<span>/</span></Link>
               </li>
               <li className= "hover:opacity-70">
                  <Link href='/contact'
                        onMouseEnter={()=>setPageName('cd contact')}
                        onMouseLeave={()=>setPageName("")}
                  >contact<span>/</span></Link>
               </li>
               <li className= "hover:opacity-70">
                  <Link href='/now'
                        onMouseEnter={()=>setPageName('cd now')}
                        onMouseLeave={()=>setPageName("")}   
                  >now<span>/</span></Link></li>

            </ul>

            </div>
            {
               !observer?.isInView ? <div className="absolute right-2 font-bold text-lg"><Toggle /></div> : ""
            }
            
         </div>
      </div>


    
   )
}

export default Menu
