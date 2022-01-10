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
    <Header/>
    </>
  )
}
