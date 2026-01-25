"use client"
import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'

const Connect = () => {

   const [email, setEmail] = useState<string>("");
   const [errorMessage, setErrorMessage] = useState<string>("")
   
   type Status = "idle" | "loading" | "success" | "already" | "error"
   const [status, setStatus] = useState<Status>("idle")
   
   const handleSubscribe = async ()=>{
         setErrorMessage("")
         if(email === "" || !email){
            setErrorMessage("Please enter your email.")
            return;
         }
   
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
         const validateEmail = (emailInput:string):boolean => {
            return emailRegex.test(emailInput)
         }
   
         let normalisedEmail;
         if (!validateEmail(email)){
            setErrorMessage("Please enter a valid email.")
            return
         }
         else {
            normalisedEmail = email.trim().toLowerCase()
         }
   
   
   
         const response = await fetch("/api/subscribe", {
            method: "POST",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify({email : normalisedEmail})
   
         })
   
         const result = await response.json();
   
         if (result.code === 200){
            setStatus("already")
         }
         else if (result.code === 201){
            setStatus("success")
         }
         else {
            setStatus("error")
            
         }
   
   }
   return (
      <div className="flex flex-col items-center min-h-screen">
         <Sidebar />
         <header className= 'w-full flex justify-center '>
            <Header />
         </header>
         <main className=' main_content max-w-[58em] mb-6 px-4 w-full flex flex-col items-center'>
            <h1 className='font-extrabold text-2xl '>connect </h1>
            <div className= "mt-6">
               <h2 className="font-extrabold text-xl mb-4">{"Let's connect"}</h2> 
               <p>{"Whether it's about software, ideas, or design, I am always open to connection."}</p>
               <ul className="flex gap-10  justify-center mt-2">
                  <a href="mailto:fmajoyegbe@gmail.com"><TfiEmail className="text-5xl hover:opacity-80 cursor-pointer"/></a>
                  <a href ="https://www.linkedin.com/in/fola-majoyegbe-85a19b98/" target="_blank" rel="no_opener noreferer"> <FaLinkedin className="text-5xl hover:opacity-80 cursor-pointer"/></a>
                  <a href="https://github.com/Folamajo" target="_blank" rel="no_opener noreferer"><FaGithub className="text-5xl hover:opacity-80 cursor-pointer"/></a>
               </ul>
               {/* <div className="border-b-1  mt-10 border-gray-300 dark:border-gray-500"></div> */}

               {/* {
                  status === "idle" && (
                     <div className="mt-10">

                        <h2 className="font-bold text-2xl mb-2">Stay in the loop</h2> 
                        <p className="mb-2">{"If you would like to follow along as I build projects, test ideas and document what I'm learning in tech and in life."}</p>
                        <Input type = "email" placeholder="Email" className="w-80 mr-2"  onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setEmail(event?.target.value )}/>
                        {
                           errorMessage ? <p className="text-red-600 text-xs mt-1">{errorMessage}</p> : ""
                        }
                        <Button size="lg" variant="outline" className="bg-[#185dc5] border-0 text-white font-bold hover:opacity-80 cursor-pointer mx-auto submit_small" 
                           onClick={handleSubscribe}>Submit</Button>
                          
                        <p className="text-xs mt-2">I respect your privacy. <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                     </div>
                  )
               }
               {
                  status === "loading" && (
                     <div className="mt-10">

                        <h2 className="font-bold text-2xl mb-2">Stay in the loop</h2> 
                        <p className="mb-2">{"If you would like to follow along as I build projects, test ideas and document what I'm learning in tech and in life."}</p>
                        <Input type = "email" placeholder={email} className="w-80 mr-2" />
                        <Button size="lg" variant="outline" className="bg-[#185dc5] border-0 text-white font-bold hover:opacity-80 cursor-pointer mx-auto" onClick={handleSubscribe} disabled={true}>Submit</Button>
                        
                        <p className="text-xs mt-2">I respect your privacy. <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                     </div>


                  )
               }
               {
                  status === "success" && (
                     <div className="mt-10">

                        <h2 className="font-bold text-2xl mb-2">Thanks for subscibing</h2> 
                        <p>Please check your inbox to confirm your email.</p> 
                        <p>Used the wrong email? Subscribe with another one. <span className= "underline cursor-pointer" onClick={()=>setStatus("idle")}>Go back</span> </p>
                        <p className="text-xs mt-2">I respect your privacy. <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                     </div>
                  )
               }

               {
                  status === "already" && (
                     <div className="mt-10">

                        <h2 className="font-bold text-2xl mb-2">{"You're already subscribed"}</h2> 
                        <p>Want to use a  <span className= "underline cursor-pointer" onClick={()=>setStatus("idle")}>different email?</span>  </p>
                        <p className="text-xs mt-2">I respect your privacy. <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                     </div>
                  )
               }
               {
                  status === "error" && (
                     <div className="mt-10">

                        <h2 className="font-bold text-2xl mb-2">Something went wrong, Please try again</h2> 
                        <Input type = "email" placeholder={email} className="w-80 mr-2"  onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setEmail(event?.target.value )}/>
                        {
                           errorMessage ? <p className="text-red-600 text-xs mt-1">{errorMessage}</p> : ""
                        }
                        <Button size="lg" variant="outline" className="bg-[#185dc5] border-0 text-white font-bold hover:opacity-80 cursor-pointer mx-auto" 
                        onClick={handleSubscribe}>Submit</Button>
                        {
                           errorMessage ? <p className="text-red-600 text-xs mt-1">{errorMessage}</p> : ""
                        }
                        <p className="text-xs mt-2">I respect your privacy.<Link href="/privacy"className="underline">Privacy policy.</Link></p>
                     </div>
                  )
               } */}
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

export default Connect