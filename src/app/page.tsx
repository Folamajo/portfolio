"use client"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function Home() {

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
      <div className=" font-medium flex flex-col items-center min-h-screen tracking-normal "
            style= {{ fontFamily : "var(--font-mono", color:  "black"}}
      >
         <Sidebar />
         <header className= ' w-full flex justify-center '>
            <Header />
         </header>
        

         <main className=' main_content max-w-[58em] mb-6 px-4 w-full '>
            <h1 className='font-bold text-2xl '>{"Hi, I'm Fola"}</h1>
            <div className= "mt-4">
               <p>
                  {"I am a software engineer working toward AI engineering by building production-grade products and infrastructure."}
               </p>

               <p className="mt-4">
                  {"This site documents hands-on engineering work: AI-powered systems, design decisions, and the tradeoffs involved in taking ideas to production."}</p>
               
               <p className="mt-4">{"What you’ll find here:"} </p>
               <ul className ='pl-5 list-disc'>
                  <li>End-to-end projects I'm actively building</li>
                  <li>Deep dives into architecture, applied machine learning, and engineering decisions</li>
                  <li>{"Case study–style reflections on what failed, what scaled and why"}</li>
               </ul>
   
               <p className="mt-4">{"The goal of this site is to document real engineering work in the open."}</p>
               <p className="mt-4">If you want to understand how I think about software and AI systems, start with the <Link href="/blog" className="underline hover:opacity-80">blog</Link>.</p>
               <p>If you want to see concrete implementations, visit the <Link href="/projects" className="underline hover:opacity-80">projects</Link>  section.</p>
               
            </div>
         </main>


         <footer 
            className=" px-4 w-full flex justify-center mt-auto py-4 bg-gray-50 dark:bg-black transition-colors duration-2000">
            <div className="w-[57em] ">
               <Footer />
            </div>
         </footer>
      </div>
    
   )
}



{/* <p className="mt-4">
                  {"If that sounds like your vibe, feel free to "}<Popover> 
                     <PopoverTrigger> 
                        <span className="font-bold hover:opacity-80 cursor-pointer text-[#185dc5]">subscribe</span>
                     </PopoverTrigger>
                     <PopoverContent className=" flex flex-col bg-white border-1 border-gray-300 dark:text-white dark:bg-[#222] dark:border-gray-500 text-md mr-2">
                        {
                           status === "idle" && (
                              <>
                                 <div className="mb-2">
                                    <p className=" font-bold text-lg">Subscribe</p>
                                    <p>Occassional updates only, no spam. Unsubscribe anytime.</p>
                              
                                 </div>
                                 <Input   
                                    type = "email" 
                                    placeholder="Email" 
                                    className="" 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setEmail(event?.target.value )}
                                 />
                                 {
                                    errorMessage ? <p className="text-red-600 text-xs mt-1">{errorMessage}</p> : ""
                                 }
                                 <Button  
                                    type ="submit" variant="outline" 
                                    className="bg-[#185dc5] text-white font-bold hover:opacity-90 cursor-pointer w-18  border-0 mt-2" 
                                    onClick={handleSubscribe} disabled={ status !== "idle"}>Submit
                                 </Button>
                        
                                 <p className="text-xs mt-2">I respect your privacy.  <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                              </>
                                 
                           )
                        }

                        {
                           status === "loading" && (
                              <>
                                  <div className="mb-2">
                                    <p className=" font-bold text-lg">Subscribe</p>
                                    <p>Occassional updates only, no spam. Unsubscribe anytime.</p>
                                 </div>
                                 <Input   
                                    type = "email" 
                                    placeholder="Email" 
                                    
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setEmail(event?.target.value )}
                                 />
                                 {
                                    errorMessage ? <p className="text-red-600 text-xs mt-1">{errorMessage}</p> : ""
                                 }
                                 <Button  
                                    type ="submit" variant="outline" 
                                    className="bg-[#185dc5] text-white font-bold hover:opacity-80 cursor-pointer w-18  border-0 mt-2" 
                                    onClick={handleSubscribe} disabled={true} >Submit
                                 </Button>
                        
                                 <p className="text-xs mt-2">I respect your privacy. <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                              </>

                           )
                        }
                        
                        {
                           status === "success" && (
                              <>
                                 <div className="mb-2">
                                    <p className=" font-bold text-lg">Thanks for subscribing </p>
                                    <p>Please check your inbox to confirm your email. Used the wrong email? Subscribe with another one. <span className= "underline cursor-pointer" onClick={()=>setStatus("idle")}>Go back</span> </p>
                                    <p> </p>
                                 </div>
                                 
                                 <p className="text-xs">I respect your privacy. <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                              </>

                           )
                        }

                        {
                           status === "already" && (
                              <>
                                 
                                 <div className=" text-lg font-bold mb-2">{"You're already subscribed"}</div>
                                 <body>
                                     <p>Want to use a  <span className= "underline cursor-pointer" onClick={()=>setStatus("idle")}>different email?</span>  </p>
                                 </body>
                                 
                                 <p className="text-xs mt-2">I respect your privacy.  <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                              </>
                           )
                        }
                        {
                           status === "error" && (
                              <>
                                 <div className="mb-2">
                                    <p className=" font-bold text-lg">Something went wrong, Please try again.</p>
                              
                                 </div>
                                 <Input   
                                    type = "email" 
                                    placeholder= {email}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setEmail(event?.target.value )}
                                 />
                                 {
                                    errorMessage ? <p className="text-red-600 text-xs mt-1">{errorMessage}</p> : ""
                                 }
                                 <Button  
                                    type ="submit" variant="outline" 
                                    className="bg-[#185dc5] text-white font-bold hover:opacity-90 cursor-pointer w-18  border-0 mt-2" 
                                    onClick={handleSubscribe} disabled={false}>Submit
                                 </Button>
                        
                                 <p className="text-xs mt-2">I respect your privacy. <Link href="/privacy"className="underline">Privacy policy.</Link></p>
                              </>
                           )
                        }
                     </PopoverContent>
                  </Popover> to get my posts delivered every couple of weeks, no spam, just throughtful work in progress. 
               </p> */}