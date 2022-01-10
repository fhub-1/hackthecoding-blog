import Head from 'next/head'
import Header from '../sections/Header'
import Layout from '../sections/Layout';

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hack the coding Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <Layout>
      {/* Hero sections */}
      <div className="space-y-4 max-w-4xl mx-auto text-center"> 
        <h1 className="text-4xl sm:text-7xl font-bold capitalize">
          <span>Hack the coding Blog Platform</span> 
           <span>for developer</span>
        </h1>
        <h2>
          Start your developer blog, share ideas and connect with other developers
        </h2>
      </div>
    </Layout>
    </>
  )
}
