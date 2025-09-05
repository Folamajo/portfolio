import React from 'react'
import Link from 'next/link'

const Menu = () => {
   return (
      <div className= 'flex justify-between border w-full'>
         <div>
            <p>CLI thing</p>
         </div>

         <div>
            <ul className='flex gap-10'>
               <li><Link href='/about'>ABOUT</Link></li>
               <li><Link href='/projects'>PROJECTS</Link></li>
               <li><Link href='/blog'>BLOG</Link></li>
               <li><Link href='/contact'>CONTACT</Link></li>
               <li><Link href='/contact'>NOW</Link></li>

               
            </ul>
         </div>

         <div>
            🔅
         </div>
      </div>
   )
}

export default Menu
