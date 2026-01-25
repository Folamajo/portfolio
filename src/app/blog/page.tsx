import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'


const Blog = () => {
  
   return   (
      <div className="flex flex-col items-center min-h-screen  ">
         <Sidebar />
         <header className= "w-full flex justify-center">
            <Header />
         </header>


         <main className=' main_content max-w-[58em] mb-6 px-4 w-full '>
            <h1 className='font-extrabold text-2xl '>blog </h1>
         </main>
         
         <footer className=" px-4 w-full flex justify-center mt-auto py-4 bg-gray-50 dark:bg-black">
            <div className="w-[60em] ">
               <Footer />
            </div>
         </footer>
      </div>
   )
}

export default Blog