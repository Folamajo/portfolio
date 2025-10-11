import React from 'react'
import siteConfig from '@/siteConfig.json'

const Footer = () => {


   return (
         <div className="    text-gray-400 text-[0.8em]">
            <div>© 2025 Fola Majoyegbe. Developed in <a href="https://code.visualstudio.com/" className="font-bold hover:opacity-80" target ="_blank">Visual Studio Code</a> with designs drafted in <a  href="https://www.figma.com/" className="font-bold hover:opacity-80" target ="_blank">Figma</a>. Built with <a href="https://nextjs.org/" className="font-bold hover:opacity-80" target ="_blank">Next.js</a>, styled using <a href= "https://tailwindcss.com/" target ="_blank" className="font-bold hover:opacity-80">Tailwind CSS</a>, and deployed on <a href= "https://vercel.com/" target ="_blank" className="font-bold hover:opacity-80">Vercel</a>. All text is primarily set in the <a href = "https://rsms.me/inter/" target ="_blank" className="font-bold hover:opacity-80">Inter</a> typeface and complemented with monospace accents.
            </div>
            
         </div>
   )
}

export default Footer
