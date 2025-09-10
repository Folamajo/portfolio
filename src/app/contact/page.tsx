import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
const page = () => {
  return (
   <div className="flex flex-col items-center border border-dashed min-h-screen">
         <header className= 'border border-dashed w-full flex justify-center '>
            <Header />
         </header>
      <main className='w-[60em] mt-20'>
         <h1 className='font-black text-4xl '>Get in touch</h1>
         <div className= "mt-6">
               
            <p>Whether it's about software, ideas, or culture, I am always open to connection.</p>
            <ul>
               <li>Email</li>
               <li>LinkedIn</li>
               <li>Instagram</li>
            </ul>
         </div>
      </main>
      <div className="border border-dashed w-full flex justify-center mt-auto py-6">
         <div className="w-[60em] ">
            <Footer />
         </div>
      </div>
   </div>
      
  )
}

export default page