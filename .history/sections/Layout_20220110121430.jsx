import Footer from "./Footer"
import Header from "./Header"
import Head from 'next/head'

const Layout = ({children}) => {

    const meta = {
        title: 'The Blogging Platform for Developer's'
    }
    return(
    <>
    <Head>
        <title>Hack the coding Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6">{children}</main>
            <Footer />
        </div>
        </>
    )
}

export default Layout