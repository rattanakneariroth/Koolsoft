import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Roth</title>
      </Head>
      <div>
        <Navbar />
        <h1>Home page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cum ad nemo fuga ipsa qui commodi? Rerum, in nisi iure vel ipsam sunt molestias minus aut eveniet error iste a.</p>
        <Link href="/blog">
          See Roth Listing

        </Link>
      </div>

    </>
    
  )
}
