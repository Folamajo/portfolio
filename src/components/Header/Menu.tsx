import React, { useContext } from 'react'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { PiMoonThin } from "react-icons/pi";
import { ObserverContext } from '@/app/context/ObserverProvider';

type MenuProps ={
   setPageName: React.Dispatch<React.SetStateAction<string>>
}


const Menu = ({ setPageName } : MenuProps) => {
   const observer = useContext(ObserverContext)
   return (
      <div className= ''>


         <div>
            {
               !observer?.isInView ? <div>Fola Majoyegbe</div> : ""
            }
            
            <ul className='flex gap-10'>
               <li>
                  <Link href='/about' 
                        onMouseEnter={()=>setPageName('cd about')}
                        onMouseLeave={()=>setPageName("")}
                  >about<span>/</span></Link>
               </li>
               <li>
                  <Link href='/projects'
                        onMouseEnter={()=>setPageName('cd projects')}
                        onMouseLeave={()=>setPageName("")}
                  >projects<span>/</span></Link>
               </li>
               <li>
                  <Link href='/blog'
                        onMouseEnter={()=>setPageName('cd blog')}
                        onMouseLeave={()=>setPageName("")}
                  >blog<span>/</span></Link>
               </li>
               <li>
                  <Link href='/contact'
                        onMouseEnter={()=>setPageName('cd contact')}
                        onMouseLeave={()=>setPageName("")}
                  >contact<span>/</span></Link>
               </li>
               <li>
                  <Link href='/now'
                        onMouseEnter={()=>setPageName('cd now')}
                        onMouseLeave={()=>setPageName("")}   
                  >now<span>/</span></Link></li>

            </ul>
         </div>


      </div>
   )
}

export default Menu
