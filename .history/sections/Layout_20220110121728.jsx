import Footer from "./Footer"
import Header from "./Header"
import Head from 'next/head'

const Layout = ({children, pageMeta}) => {

    const meta = {
        title: 'The Blogging Platform for Developers',
        description: 'Start your developer blog,share idea, and connect with others dev',
        type: 'website',
        ...pageMeta,
    }
    return(
    <>
    <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
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