import React from 'react'
import Link from 'next/link'

type MenuProps ={
   setPageName: React.Dispatch<React.SetStateAction<string>>
}


const Menu = ({ setPageName } : MenuProps) => {


   return (
      <div className= ''>
         {/* <div>
            <p>CLI thing</p>
         </div> */}

         <div>
            <ul className='flex gap-10'>
               <li><Link href='/about' onClick={()=>setPageName("about")}>ABOUT</Link></li>
               <li><Link href='/projects'>PROJECTS</Link></li>
               <li><Link href='/blog'>BLOG</Link></li>
               <li><Link href='/contact'>CONTACT</Link></li>
               <li><Link href='/now'>NOW</Link></li>

            </ul>
         </div>

         {/* <div>
            🔅
         </div> */}
      </div>
   )
}

export default Menu
