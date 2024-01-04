import '@/styles/globals.css'
import '@/styles/Navbar.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
  <Head />  
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}
