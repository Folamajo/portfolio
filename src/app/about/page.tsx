import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
const page = () => {
  return (
   <div>
      <div className= 'border border-dashed flex justify-center'>
         <Header />

         
      </div>
      <main>
         <h1>About me</h1>
         <div>//IMAGE</div>


         <div>
            <h1>Who is Fola Majoyegbe?</h1>
            <p>
               I was born in Nigeria and grew up in Ireland, two places that shaped both my toughness and my imagination. My degree was in biopharmaceuticals, but football was always my first love. I played semi-pro for a while before realizing my path would take me beyond the pitch.
            </p>
            <p>
               I’ve lived a lot of lives in a short time: a few months in New York, nearly a year in the Netherlands, and two unforgettable years in Vietnam. Living and working in different places around the world has helped me build resilience, adaptability, and a global perspective that now shapes how I work with teams and approach problem-solving.
            </p>
            <p>
               Eventually, I came back, sat down, and taught myself how to code. That decision changed everything. Today, I’m a software engineer by trade — building tools, solving problems, and chasing mastery in tech.
            </p>

         </div>
         <div>
            <h1>Hobbies?</h1>
            <p>When I'm not at my desk. I like to move. I train calisthenics, and have been recently been pushing myself through Muay Thai. Football is still a big part of my life too, whether I'm playing recreationally or supporting Arsenal(with all the highs and heartbreaks that come with it). 

            </p>
            <p>
               Outside of fitness and sport, I also enjoy reading and my current obsession is philosophy and Nietzsche. I am fascinated by how ideas shape culture, creativity, and problem solving. That curiosity feeds directly into engineering and my side project Papo Arts Club – a cultural intelligence platform inspired by African visual arts. It’s where I research, curate, and tell stories about art, design, and fashion from across the continent, blending culture with analysis and technology.
            </p>

         </div>
         <div>
            
         </div>
         
         
      </main>
      <footer>
         <Footer />
      </footer>
   </div>
      
  )
}

export default page
