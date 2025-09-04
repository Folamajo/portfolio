import React from 'react'

const Menu = () => {
   return (
      <div className= 'flex justify-between border w-full'>
         <div>
            <p>CLI thing</p>
         </div>

         <div>
            <ul className='flex gap-10'>
               <li>ABOUT</li>
               <li>PROJECTS</li>
               <li>BLOG</li>
               <li>CONTACT</li>
               
            </ul>
         </div>

         <div>
            🔅
         </div>
      </div>
   )
}

export default Menu
