import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";


const Menu_Two = () => {
   const [openSideBar, setOpenSideBar] = useState<boolean>(false)
   useEffect(()=>{

      console.log(openSideBar)
   }, [openSideBar])

   
  return (
      <div>
         <div className=' px-6 py-3 flex max-w-[60em] mx-auto'>


               <div className="  mr-auto">
                  <h1 className='text-2xl font-bold tracking-tight'>
                     <Link href="/">
                        Fola Majoyegbe
                     </Link>
                  </h1>
               </div>
               

               <div className=' ml-auto ' >
                  <RxHamburgerMenu className="text-2xl cursor-pointer hover:opacity-80 " onClick={()=>setOpenSideBar(prev => !prev)}/>
               </div>
            </div>

         </div>
   )
}

export default Menu_Two






            {/* <div className=' flex w-[21em]'> */}
               {/* <p className="mono font-bold text-[1.2em]">fola@website {cleanedPathName ? cleanedPathName : '~'} %</p>       <p className="ml-1 mono text-[1.2em]">{pageName}</p> <div className='blinking_cursor '></div>  */}
            {/* </div> */}