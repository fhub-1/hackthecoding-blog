import Footer from "./Footer"
import Header from "./Header"
import Head from 'next/head'
import { useRouter } from "next/router"


const Layout = ({children, pageMeta}) => {
    const router = useRouter();

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
        <meta property="og:url" content={`http://localhost:3000${router.asPath}`}/>
        <meta property="og:site_name" content={meta.title}/>
        <meta property="og:description" content={meta.description}/>
        <meta property="og:title" content={meta.title}/>
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