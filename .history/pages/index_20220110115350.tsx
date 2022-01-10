import Head from 'next/head'
import Header from '../sections/Header'
import Layout from '../sections/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hack the coding Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <section className="flex flex-column justify-center items-center">
    <Layout>
      {/* Hero sections */}
      <div className="space-y-4 max-w-4xl mx-auto text-center"> 
        <h1 className="text-4xl sm:text-7xl font-bold capitalize">
          <span className="block">Hack the coding Blog Platform</span> 
           <span className="block">for developer</span>
        </h1>
        <h2 className="text-xl sm:text-2xl">
          Start your developer blog, share ideas and connect with other developers
        </h2>
        <button  type="button"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start your blog for free</button>
      </div>
    </Layout>
    </section>
    </>
  )
}
