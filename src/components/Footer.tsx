import React from 'react'
import Link from 'next/link'

const Footer = () => {


   return (
         <div className="    text-gray-400 text-[0.8em]  px-4">
            <div>© 2025 <Link href="/">Fola Majoyegbe</Link>. Developed in <a href="https://code.visualstudio.com/" className="font-extrabold hover:opacity-80" target ="_blank">Visual Studio Code</a>, designed in<a  href="https://www.figma.com/" className="font-extrabold hover:opacity-80" target ="_blank"> Figma</a>. Built with <a href="https://nextjs.org/" className="font-extrabold hover:opacity-80" target ="_blank">Next.js</a>, and <a href= "https://tailwindcss.com/" target ="_blank" className="font-extrabold hover:opacity-80">Tailwind CSS</a>. Deployed on <a href= "https://vercel.com/" target ="_blank" className="font-extrabold hover:opacity-80">Vercel</a>. Typeset is primarily in <a href = "https://www.jetbrains.com/lp/mono/" target ="_blank" className="font-extrabold hover:opacity-80">JetBrains Mono</a>.
            </div>
            
         </div>
   )
}

export default Footer
