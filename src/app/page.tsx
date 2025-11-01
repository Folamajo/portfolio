"use client"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"


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
      <div className="flex flex-col items-center min-h-screen tracking-tight ">
         <Sidebar />
         <header className= ' w-full flex justify-center '>
            <Header />
         </header>
        

         <main className=' main_content max-w-[58em] mb-6 px-4 w-full '>
            <h1 className='font-bold text-3xl '>👋🏾 Hello, I'm Fola</h1>
            <div className= "mt-6">
               <p>
                  I’m a software engineer, builder, and creative thinker based in London. This site is my digital home, a space to document the things I'm creating, thinking about and learning along the way. 
               </p>

               <p className="mt-4">
                  I care  about solving real problems through code and design, and I'm constantly experimenting with new ideas, tools and technologies. Sometimes it's a product, sometimes it's a blog post, but it's always driven by curiosity and the desire to grow.</p>
               <p className="mt-4">
                  Here, You'll find my projects, writings and the occasionsal reflection on building, discipline and growth — both technical and personal.
               </p>
               <p className="mt-4">
                  If that sounds like your vibe, feel free to <Popover> 
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
                        
                                 <p className="text-xs mt-2">I respect your privacy. <span className="underline">Privacy policy.</span></p>
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
                        
                                 <p className="text-xs mt-2">I respect your privacy. <span className="underline">Privacy policy.</span></p>
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
                                 
                                 <p className="text-xs">I respect your privacy. <span className="underline">Privacy policy.</span></p>
                              </>

                           )
                        }

                        {
                           status === "already" && (
                              <>
                                 
                                 <div className=" text-lg font-bold mb-2">You're already subscribed</div>
                                 <body>
                                     <p>Want to use a  <span className= "underline cursor-pointer" onClick={()=>setStatus("idle")}>different email?</span>  </p>
                                 </body>
                                 
                                 <p className="text-xs mt-2">I respect your privacy. <span className="underline">Privacy policy.</span></p>
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
                        
                                 <p className="text-xs mt-2">I respect your privacy. <span className="underline">Privacy policy.</span></p>
                              </>
                           )
                        }
                     </PopoverContent>
                  </Popover> to get my posts delivered every couple of weeks, no spam, just throughtful work in progress. 
               </p>
               <p className="mt-4">Thanks for stopping by.</p>
            </div>
         </main>


         <footer className=" px-4 w-full flex justify-center mt-auto py-4 bg-gray-50 dark:bg-black transition-colors duration-2000">
            <div className="w-[57em] ">
               <Footer />
            </div>
         </footer>
      </div>
    
   )
}



