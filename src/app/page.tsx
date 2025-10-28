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
   const [loading, setLoading] = useState<boolean>(false);
   const [message, setMessage] = useState<string>("")
   const [errorMessage, setErrorMessage] = useState<string>("")

   const handleSubscribe = async ()=>{
      setErrorMessage("")
      if(email === "" || !email){
         setErrorMessage("Please enter your email.")
         return;
      }

      // setLoading(true)

      //Email validation
      // get regex 
      // create valudation 
      // if it passes create a variable that stores the passed email if it doesnt. return an errorMessage

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
      // setMessage(result.message)
      // setLoading(false)
      if (result.code === 200){
         setMessage("You have already subscribed using this email! ")
    
      }
      if (result.code === 201){
         setMessage("Thank you for subscribing, please check your inbox to confirm.")
        
      }
      console.log(result)
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
                     <PopoverTrigger> <span className="font-bold hover:opacity-80 cursor-pointer text-[#185dc5]">subscribe</span></PopoverTrigger>
                        <PopoverContent className=" flex flex-col bg-white border-1 border-gray-300 dark:text-white dark:bg-[#222] dark:border-gray-500 text-md ">
                           {
                              message 
                              ?  <p>{message}</p> 
                              :  <div className="mb-2">
                                    <p className=" font-bold">Subscribe</p>
                                    <p className="text-sm mt-2">Occassional updates only, no spam. Unsubscribe anytime.</p>
                                 
                                 </div>
                           }
                          
                           <Input   type = "email" placeholder="Email" className="" 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setEmail(event?.target.value )}/>
                           {
                              errorMessage ? <p className="text-red-600 text-xs mt-1">{errorMessage}</p> : ""
                           }
                           <Button  type ="submit" variant="outline" 
                                    className="bg-[#185dc5] text-white font-bold hover:opacity-80 cursor-pointer w-18  border-0 mt-2" 
                                    onClick={handleSubscribe} disabled={ loading ? true : false}>Submit
                           </Button>
                           
                           <p className="text-xs mt-2">I respect your privacy. <span className="underline">Privacy policy.</span></p>
                        </PopoverContent>
                     </Popover> to get my posts delivered every couple of weeks, no spam, just throughtful work in progress. 

               </p>

               <p className="mt-4">Thanks for stopping by.</p>
            </div>

            
               
               <div className= "mt-6">
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







//<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );