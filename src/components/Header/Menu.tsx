import React, { useContext } from 'react'
import Link from 'next/link'
import { ObserverContext } from '@/app/context/ObserverProvider';
import Toggle from './Toggle';

type MenuProps ={
   setPageName: React.Dispatch<React.SetStateAction<string>>
}


const Menu = ({ setPageName } : MenuProps) => {
   const observer = useContext(ObserverContext)
   
   return (
      <div className= ' flex justify-center items-center relative ' >
         <div className="w-[58em] relative flex justify-center items-center py-6  ">
            {
               !observer?.isInView ? <div className="absolute left-2 font-bold text-lg px-2">Fola Majoyegbe</div> : ""
            }
            



            <div className="  mx-auto absolute left-1/2 transform -translate-x-1/2 text-[0.9em]">
               <ul className='flex gap-10'>
               <li className= "hover:opacity-70">
                  <Link href='/about' 
                        onMouseEnter={()=>setPageName('cd about')}
                        onMouseLeave={()=>setPageName("")}
                  >about</Link>
               </li>
               <li className= "hover:opacity-70">
                  <Link href='/projects'
                        onMouseEnter={()=>setPageName('cd projects')}
                        onMouseLeave={()=>setPageName("")}
                  >projects</Link>
               </li>
               <li className= "hover:opacity-70">
                  <Link href='/blog'
                        onMouseEnter={()=>setPageName('cd blog')}
                        onMouseLeave={()=>setPageName("")}
                  >blog</Link>
               </li>
               <li className= "hover:opacity-70">
                  <Link href='/connect'
                        onMouseEnter={()=>setPageName('cd connect')}
                        onMouseLeave={()=>setPageName("")}
                  >connect</Link>
               </li>
               {/* <li className= "hover:opacity-70">
                  <Link href='/now'
                        onMouseEnter={()=>setPageName('cd now')}
                        onMouseLeave={()=>setPageName("")}   
                  >NOW</Link></li> */}

            </ul>

            </div>
            {
               !observer?.isInView ? <div className="absolute right-2 font-bold text-lg  pr-2"><Toggle /></div> : ""
            }
            
         </div>
      </div>


    
   )
}

export default Menu
