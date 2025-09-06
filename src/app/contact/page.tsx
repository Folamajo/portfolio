import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
const page = () => {
  return (
   <div>
      <header className= 'border border-dashed flex justify-center'>
         <Header />

         
      </header>
      <main>
         <h1>Get in touch</h1>
         <p>Whether it's about software, ideas, or culture, I am always open to connection.</p>
         <ul>
            <li>Email</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
         </ul>
      </main>
      <footer>
         <Footer />
      </footer>
   </div>
      
  )
}

export default page