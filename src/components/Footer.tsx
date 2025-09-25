import React from 'react'
import siteConfig from '@/siteConfig.json'

const Footer = () => {


   return (
         <div>
            <p>Last updated {new Date(siteConfig.lastUpdated).toLocaleString("en-GB", {
               timeZone: "Europe/London",
               day: "2-digit",
               month: "2-digit",
               year: "numeric",
               hour: "2-digit",
               minute: "2-digit"
            })} BST</p> 
            
         </div>
   )
}

export default Footer
