import React from 'react'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'



type MenuProps ={
   setPageName: React.Dispatch<React.SetStateAction<string>>
}


const Menu = ({ setPageName } : MenuProps) => {

   // const pathname = usePathname();
   return (
      <div className= ''>
         {/* <div>
            <p>CLI thing</p>
         </div> */}

         <div>
            <ul className='flex gap-10'>
               <li>
                  <Link href='/about' 
                        onMouseEnter={()=>setPageName('cd about')}
                        onMouseLeave={()=>setPageName("")}
                  >ABOUT</Link>
               </li>
               <li>
                  <Link href='/projects'
                        onMouseEnter={()=>setPageName('cd projects')}
                        onMouseLeave={()=>setPageName("")}
                  >PROJECTS</Link>
               </li>
               <li>
                  <Link href='/blog'
                        onMouseEnter={()=>setPageName('cd blog')}
                        onMouseLeave={()=>setPageName("")}
                  >BLOG</Link>
               </li>
               <li>
                  <Link href='/contact'
                        onMouseEnter={()=>setPageName('cd contact')}
                        onMouseLeave={()=>setPageName("")}
                  >CONTACT</Link>
               </li>
               <li>
                  <Link href='/now'
                        onMouseEnter={()=>setPageName('cd now')}
                        onMouseLeave={()=>setPageName("")}   
                  >NOW</Link></li>

            </ul>
         </div>

         {/* <div>
            🔅
         </div> */}
      </div>
   )
}

export default Menu
