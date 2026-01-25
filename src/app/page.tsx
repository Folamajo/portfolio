"use client"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"

// import { useState } from "react"
import Link from "next/link"

export default function Home() {

   // const [email, setEmail] = useState<string>("");
   // const [errorMessage, setErrorMessage] = useState<string>("")

   // type Status = "idle" | "loading" | "success" | "already" | "error"
   // const [status, setStatus] = useState<Status>("idle")

   // const handleSubscribe = async ()=>{
   //    setErrorMessage("")
   //    if(email === "" || !email){
   //       setErrorMessage("Please enter your email.")
   //       return;
   //    }

   //    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   //    const validateEmail = (emailInput:string):boolean => {
   //       return emailRegex.test(emailInput)
   //    }

   //    let normalisedEmail;
   //    if (!validateEmail(email)){
   //       setErrorMessage("Please enter a valid email.")
   //       return
   //    }
   //    else {
   //       normalisedEmail = email.trim().toLowerCase()
   //    }



   //    const response = await fetch("/api/subscribe", {
   //       method: "POST",
   //       headers : { "Content-Type" : "application/json" },
   //       body: JSON.stringify({email : normalisedEmail})

   //    })

   //    const result = await response.json();

   //    if (result.code === 200){
   //       setStatus("already")
   //    }
   //    else if (result.code === 201){
   //       setStatus("success")
   //    }
   //    else {
   //       setStatus("error")
         
   //    }

   // }

   return (
      <div 
         className=" font-medium flex flex-col items-center min-h-screen"
   
      >
      
         <Sidebar />
         <header className= ' w-full flex justify-center '>
            <Header />
         </header>
        

         <main className=' main_content max-w-[58em] mb-6 px-4 w-full '>
            <h1 className='font-extrabold text-2xl '>{"hi, "}</h1>
            <div className= "mt-4">
               <p>
                  {"I'm Fola, a software engineer working toward AI engineering by building production-grade products and infrastructure."}
               </p>

               <p className="mt-4">
                  {"This site documents hands-on engineering work: AI-powered systems, design decisions, and the tradeoffs involved in taking ideas to production."}</p>
               
               <p className="mt-4">{"What you’ll find here:"} </p>
               <ul className ='pl-5 list-disc'>
                  <li>{"End-to-end projects I'm actively building"}</li>
                  <li>Deep dives into architecture, applied machine learning, and engineering decisions</li>
                  <li>{"Case study–style reflections on what failed, what scaled and why"}</li>
               </ul>
   
               <p className="mt-4">{"The goal of this site is to document real engineering work in the open."}</p>
               <p className="mt-4">If you want to understand how I think about software and AI systems, start with the <Link href="/blog" className="underline hover:opacity-80">blog</Link>.</p>
               <p>Else if you want to see concrete implementations, visit the <Link href="/projects" className="underline hover:opacity-80">projects</Link>  section.</p>
               
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


