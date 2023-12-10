import './globals.css'
import { Metadata } from "next"
import { Suspense } from "react"
import Loading from "./loading"
import Providers from "./Provider"
import NavBar from "./(shared)/NavBar"
import Newsletter from "./(shared)/Newsletter"
import Footer from "./(shared)/Footer"
import { Oxanium } from 'next/font/google'
import {Toaster} from 'react-hot-toast';
export const metadata: Metadata = {
  title: 'Travel with us. Explore',
  description: 'a website to book hotel,car',
}
import { Session } from "next-auth"
import getCurrentUser from './actions/getCurrentUser'


const inter = Oxanium({ 
  subsets: ['latin'] ,
  variable: '--font-oxanium'
})

export default async function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session:Session
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers session={session}>
            <Suspense  fallback={<Loading />}>
                <NavBar currentUser={currentUser}/>
                  <Toaster />
                    {children}
                <Newsletter />
                <Footer />
            </Suspense>  
        </Providers>
      </body>
    </html>
  )
}
