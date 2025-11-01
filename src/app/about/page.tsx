import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import Sidebar from "@/components/Sidebar"


const page = () => {
  return (
      <div className="flex flex-col items-center min-h-screen">
         <Sidebar />
     
         <header className= ' w-full flex justify-center'>
            <Header />
         </header>

         
  
      <main className=' main_content max-w-[57em] mb-6 px-4'>
         <h1 className='font-bold text-3xl '>About </h1>
         
         <div>//IMAGE</div>


         <div className= "mt-6">
            <h1 className="text-xl font-bold">Who is Fola?</h1>
            <p className="mt-4">
               I was born in Nigeria and grew up in Ireland, two places that taught me how to adapt fast and stay curious. My degree was in biopharmaceuticals, but at the time, I wasn’t sure what I really wanted to do, so I took the opportunity do some traveling.
            </p>
            <p className="mt-4">
               Over the years, I've lived in a few different corners of the world. A few months in New York, nearly a year in the Netherlands, and two unforgettable years in Vietnam. Living and working across cultures taught me resilience, adaptability, and perspective, all of which now shape how I build, think, and collaborate.
            </p>
            <p className="mt-4">
               After years of exploring, I came back home and decided to learn how to code. I started with a bootcamp and kept teaching myself from there. That decision changed everything. Today, I’m a software engineer by trade — building tools, solving problems, and chasing mastery in tech.
            </p>

         </div>
         <div className="mt-6">
            <h1 className="text-xl font-bold">Hobbies & Interests?</h1>
            <p className="mt-4">When I'm not coding. I like to move, football has always been a constant in my life, I've played since I was a kid and I still play regularly today. And yes, I support Arsenal, with all the highs and heartbreaks that come with it. I also train calisthenics and kickboxing a few times a week. 

            </p>
            <p className="mt-4">
              Outside of movement and sport, I take time to read. Lately, philosophy and Nietzsche have been at the center of that. I’m fascinated by how ideas shape creativity, systems, and problem-solving. That same curiosity also fuels my love for art and design, and how both connect with technology and culture.
            </p>

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
