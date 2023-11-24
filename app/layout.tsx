import './globals.css'
import { Metadata } from "next"
import { Suspense } from "react"
import Loading from "./loading"
import Providers from "./Provider"
import NavBar from "./(shared)/NavBar"
import Newsletter from "./(shared)/Newsletter"
import Footer from "./(shared)/Footer"
import { Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Travel Application',
  description: 'a website to book hotel,car',
}


const inter = Oxanium({ 
  subsets: ['latin'] ,
  variable: '--font-oxanium'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Suspense  fallback={<Loading />}>
          <Providers>
            <NavBar />
              {children}
            <Newsletter />
            <Footer />
          </Providers>
        </Suspense>  
      </body>
    </html>
  )
}
