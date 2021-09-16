import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>LinkedIn-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    {/* navbar */}
    <Navbar />
      
    </div>
  )
}
