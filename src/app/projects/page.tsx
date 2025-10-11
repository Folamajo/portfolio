import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import Sidebar from "@/components/Sidebar"


const page = () => {
  return (
      <div className="flex flex-col items-center min-h-screen ">
         <Sidebar />

         <header className= " w-full flex justify-center ">
            <Header />
         </header>

         <main className='w-[60em] mt-20'>
            <h1 className='font-black text-4xl mr-auto'>Projects</h1>
         </main>

         <div className="px-4 w-full flex justify-center mt-auto py-4 bg-gray-50 dark:bg-black">
            <div className="w-[60em] ">
               <Footer />
            </div> 
         </div>
      </div>
   )
}

export default page