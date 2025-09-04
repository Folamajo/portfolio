import React from 'react'
import Menu from './Menu'
import Name from './Name'
const Header = () => {
   
   return (
         <div className='flex flex-col items-center border w-[60em]'>
            <Name />
            <Menu />
         </div>
   )
}

export default Header
