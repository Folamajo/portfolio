import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import Sidebar from "@/components/Sidebar"


const About = () => {
  return (
      <div 
         className="flex flex-col items-center min-h-screen"

      >
         <Sidebar />
     
         <header className= ' w-full flex justify-center'>
            <Header />
         </header>

         
  
         <main className=' main_content max-w-[57em] mb-6 px-4 tracking-normal'>
            <h1 className='font-extrabold text-2xl '>about </h1>
            {/* ADD IMAGE */}
            <div className= "mt-4 border-b pb-6 border-b-gray-300 dark:border-b-gray-700 ">
               <p>
                  {"I’m a software engineer working toward AI engineering, with a strong bias toward ownership and systems thinking."}
               </p>
               <p className="mt-4">
                  {"I learn by building full systems end to end. Owning the design, the implementation, and the tradeoffs."}
               </p>
               <p className="mt-4">
                  {"My path into tech wasn’t linear. I studied biopharmaceuticals, lived and worked across multiple countries, and eventually taught myself how to code. That background shaped how I approach complex problems: reasoning from first principles, staying comfortable in ambiguity, and improving through iteration."}
               </p>
               <p className="mt-4">
               {"Outside of code, I play football and support Arsenal (a long-term exercise in emotional discipline). I also train calisthenics and Kickboxing/Muay Thai."}
               </p>

            </div>
            <div className="mt-6 border-b pb-6 border-b-gray-300 dark:border-b-gray-700 ">
               <h1 className="text-xl font-extrabold">tl;dr</h1>
               <ul className ='pl-5 list-disc mt-4'>
                  <li>Software engineering moving into AI</li>
                  <li>Learns by building and owning full systems</li>
                  <li>Interested in tradeoffs, architecture, and end-to-end thinking</li>
               </ul>
            </div>
            
            <div className=" border-b-gray-300 mt-6">
               <h1 className="text-xl font-extrabold">current tools </h1>
               <ul className ='mt-4'>
                  <li><strong className="font-extrabold">Programming</strong> Python, JS, TS</li>
                  <li><strong className="font-extrabold">AI/ML</strong> PyTorch, scikit-learn, OpenAI APIs, embeddings, LLM-based analysis pipelines</li>
                  <li><strong className="font-extrabold">Full Stack</strong> React, Next.js, Tailwind, FastAPI, , REST, Jest, Cypress, HTML, CSS, Supabase</li>
                  <li><strong className="font-extrabold">DevOps</strong> PostgreSQL, Docker, Docker Compose, CI/CD, AWS</li>
                  <li><strong className="font-extrabold">Workflow</strong> Git, GitHub</li>

               </ul>
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

export default About

//  <p>
//                {"I was born in Nigeria and grew up in Ireland, two places that taught me how to adapt fast and stay curious. My degree was in biopharmaceuticals, but at the time, I wasn't sure what I really wanted to do, so I took the opportunity do some traveling."}
//             </p>

{/* <p className="mt-4">
              {"Outside of movement and sport, I take time to read. Lately, philosophy and Nietzsche have been at the center of that. I'm fascinated by how ideas shape creativity, systems, and problem-solving. That same curiosity also fuels my love for art and design, and how both connect with technology and culture."}
            </p> */}