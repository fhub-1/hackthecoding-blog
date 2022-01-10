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
      <div> 
        <h1 className="text-4xl sm:text-7xl font-bold capitalize">
          <span>Hack the coding Blog Platform</span> 

        </h1>
      </div>
    </Layout>
    </>
  )
}
