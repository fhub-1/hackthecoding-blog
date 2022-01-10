import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}