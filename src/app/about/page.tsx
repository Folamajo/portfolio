import React from 'react'
import Header from '@/components/Header/Header'
const page = () => {
  return (
   <div>
      <div className= 'border border-dashed flex justify-center'>
         <Header />

         
      </div>
      <section>
         <h1>About</h1>

         <p>Hi, My name is Fola. I’m a software engineer with 2 years of experience building full-stack applications, with a strong focus on clean code, AI-powered systems, and data-driven tools. I specialize in turning complex ideas into usable products that balance technical quality with user experience.</p>
         <p>In my current role within the Clinical Effectivess group in QMUL I’ve built production-ready tools that  for the NHS, designing secure data ingestion systems with React, FastAPI, and SQL Server. Outside of work, I’m developing an AI-powered notes application that lets users query their own files with large language models, and I’m also building Papo Arts Club, a cultural intelligence platform at the intersection of African design and technology.</p>
         <p>I approach engineering with a balance of product thinking and technical depth. My focus is on writing clean, maintainable code (SOLID, TDD/BDD practices) while always keeping the end user in mind. I believe in continuous learning — from DSA practice and system design to experimenting with LLM-powered applications.</p>
         <p>Before tech, I lived in New York, the Netherlands, and Vietnam, and played football semi-professionally. That journey gave me resilience, adaptability, and a global perspective that now shapes how I work with teams and approach problem-solving.</p>

      </section>
   </div>
      
  )
}

export default page
