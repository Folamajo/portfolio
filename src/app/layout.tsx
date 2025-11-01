
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ObserverProvider from "./context/ObserverProvider";
import ThemeProvider from "./context/ThemeProvider";
import SidebarProvider from "./context/SidebarProvider";





export const metadata: Metadata = {
   title: "Fola Majoyegbe – Software Engineer & Builder",
   description: "Portfolio of Fola Majoyegbe — developer, builder, and creative thinker focused on delivering real value through software.",
   openGraph: {
      title: "Fola Majoyegbe – Software Engineer & Builder",
      description: "I build clean systems and useful products.",
   
   }
};

const inter = Inter({
   subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)


{


   
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased `}
      >
         <ThemeProvider 
            attribute='class' 
            enableSystem 
            defaultTheme="system"
            disableTransitionOnChange
            enableColorScheme = {false}
         >
            <ObserverProvider>
               <SidebarProvider>
                  {children}
               </SidebarProvider>
            </ObserverProvider>
         </ThemeProvider>
      </body>
    </html>
  );
}
