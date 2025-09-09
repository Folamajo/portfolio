'use client'
import React, { useState } from 'react'
import Menu from './Menu'
import Name from './Name'
import { usePathname } from 'next/navigation'

const Header = () => {
   const [pageName, setPageName] = useState<string>("")
   // const pathname= usePathname()
   // console.log(pathname)
   // setPageName(usePathname)
   return (
         <div className='flex flex-col items-center border w-[60em]'>
            <Name pageName={pageName}/>
            <Menu setPageName={setPageName}/>
         </div>
   )
}

export default Header
