import Head from 'next/head'
import Navbar from '../components/Navbar'
import PostCommentCard from '../components/postCommentCard'
import UserBanner from '../components/UserBanner'

export default function Home() {
  return (
    <div className="bg-[#f3f2ef]">
      <Head>
        <title>LinkedIn-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    {/* navbar */}
    <Navbar />

    {/* user banner */}
    <UserBanner />

    {/* post comment  */}
    <PostCommentCard />
      
    </div>
  )
}
