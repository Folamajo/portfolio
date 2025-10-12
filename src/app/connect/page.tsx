"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const page = () => {
  return (
      <div className="flex flex-col items-center min-h-screen">
         <Sidebar />
         <header className= 'w-full flex justify-center '>
            <Header />
         </header>
         <main className=' main_content max-w-[58em] mb-6 px-4 w-full flex flex-col items-center'>
            <h1 className='font-bold text-3xl '>Connect</h1>
            <div className= "mt-6">
               <h2 className="font-bold text-2xl mb-4">Let's connect</h2> 
               <p>Whether it's about software, ideas, or design, I am always open to connection.</p>
               <ul className="flex gap-10  justify-center mt-2">
                  <TfiEmail className="text-5xl hover:opacity-80 cursor-pointer"/>
                  <FaLinkedin className="text-5xl hover:opacity-80 cursor-pointer"/>
                  <FaGithub className="text-5xl hover:opacity-80 cursor-pointer"/>
               </ul>
               <div className="border-b-1  mt-10 border-gray-300 dark:border-gray-500"></div>

               <div className="mt-10">

                  <h2 className="font-bold text-2xl mb-4">Stay in the loop</h2> 
                  <p className="mb-2">If you would like to follow along as I build projects, test ideas and document what I'm learning in tech and in life.</p>
                  <Input type = "email" placeholder="Email" className="w-80 mr-2" />
                  <Button size="lg" variant="outline" className="bg-[#185dc5] border-0 text-white font-bold hover:opacity-80 cursor-pointer mx-auto">Submit</Button>

               </div>
            </div>
         

         </main>
         <footer className=" px-4 w-full flex justify-center mt-auto py-4 bg-gray-50 dark:bg-black">
            <div className="w-[60em] ">
               <Footer />
            </div>
         </footer>
      </div>
      
  )
}

export default page