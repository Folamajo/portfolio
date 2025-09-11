import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
const page = () => {
  return (
   <div className="flex flex-col items-center border border-dashed h-screen">
      <header className= 'border border-dashed flex justify-center'>
         <Header />
      </header>

      
      <main className='w-[60em] mt-20'>
         <h1 className='font-black text-4xl'>Blog</h1>
      </main>
      <footer className="border border-dashed w-full flex justify-center mt-auto py-6">
         <div className="w-[60em] ">
               <Footer />
            </div>
      </footer>
   </div>
      
  )
}

export default page