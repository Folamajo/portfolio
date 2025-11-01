import React from 'react'
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header/Header"
import Link from 'next/link';

const Privacy = () => {
   return (
      <div className="flex flex-col items-center min-h-screen tracking-tight ">
         <Sidebar />
         <header className= ' w-full flex justify-center '>
            <Header />
         </header>

         <main className=' main_content max-w-[58em] mb-6 px-4 w-full'>
            <h1 className='font-bold text-3xl '>Privacy policy</h1>
            <h2 className="text-xl font-bold mt-2">Last updated: November 1, 2025 </h2>

            <div className="mt-4">
               <h3 className="">{"Hello, I'm Fola"} 👋🏾</h3>
               <p>{"This website (folamajo.com) is my personal space to share what I’m creating, thinking about, and learning along the way."} I care about privacy and only collect the bare minimum of personal information to keep things running smoothly.</p>
               <p></p>
            </div>
            
            <div className="mt-4">
               <h3 className="font-bold">1. What information I collect</h3>
               <p>{"The only personal information I collect is your email address and that is only if you choose to subscribe to updates or my newsletter. I do not track you with Google Analytics, ads, or cookies for marketing purposes."}
               </p>
             
            </div>

            <div className="mt-4">
               <h3 className="font-bold">2. How your data is Used</h3>
               <p>{"Your email is used only to send updates, new articles, or announcements related to my work. That’s it, no selling, sharing, or hidden tracking."}
               </p>
             
            </div>

            <div className="mt-4">
               <h3 className="font-bold">3. How your data is stored</h3>
               <p>{"Emails are securely managed through MailerLite, a GDPR-compliant email platform. You can unsubscribe at any time using the link in any email you receive. I don’t store your email address anywhere else."}
               </p>
             
            </div>

            <div className="mt-4">
               <h3 className="font-bold">4. Cookies</h3>
               <p>Right now, folamajo.com doesnt use cookies. If I ever add analytics or other features that require them, I'll update this policy and let you know</p>
             
            </div>

            <div className="mt-2">
               <h3 className="font-bold">5. Your rights</h3>
               <p>{"If you’ve subscribed and want your data removed, or have any questions about how your information is handled, you can contact me directly at:"} <a href="mailto:fmajoyegbe@gmail.com" className='underline hover:opacity-90'>fmajoyegbe@gmail.com</a>
               </p>
            </div>

            <div className="mt-4">
               <h1 className="font-bold">6. Changes to this policy</h1>
               <p>Occasionally I may update this Privacy Policy to reflect changes in the site or legal requirements. The updated version will always be posted here with a new <span className="font-medium">“Last updated”</span> date.</p>
            </div>

            
            <p className="mt-4 ">Thanks for visiting <Link className="hover:opacity-90" href="/">folamajo.com</Link></p>

         </main>
         <footer className=" px-4 w-full flex justify-center mt-auto py-4 bg-gray-50 dark:bg-black transition-colors duration-2000">
            <div className="w-[57em] ">
               <Footer />
            </div>
         </footer>
         
      </div>
  )
}

export default Privacy
