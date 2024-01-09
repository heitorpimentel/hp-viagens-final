import '@/styles/globals.css'
import '@/styles/Navbar.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import SideNav from '@/components/SideNav'

export default function App({ Component, pageProps }) {
  return (
    <>
  <Head />
  <SideNav />  
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}
