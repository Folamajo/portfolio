import React from 'react'
import siteConfig from '@/siteConfig.json'

const Footer = () => {


   return (
         <div className="    text-gray-400 text-[0.8em]">
            © 2025 Fola Majoyegbe
            {/* <p>Last updated {new Date(siteConfig.lastUpdated).toLocaleString("en-GB", {
               timeZone: "Europe/London",
               day: "2-digit",
               month: "2-digit",
               year: "numeric",
               hour: "2-digit",
               minute: "2-digit"
            })} BST</p>  */}
            
         </div>
   )
}

export default Footer
