
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ObserverProvider from "./context/ObserverProvider";
import ThemeProvider from "./context/ThemeProvider";
import SidebarProvider from "./context/SidebarProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fola Majoyegbe",
  description: "Portfolio website for Fola Majoyegbe ",
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
