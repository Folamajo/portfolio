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
         <h1>Blog</h1>
      </main>
      <footer>
         <Footer />
      </footer>
   </div>
      
  )
}

export default page