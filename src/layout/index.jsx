import dynamic from "next/dynamic"
import Footer from "./footer"
const Header = dynamic(() => import("./header"), {ssr: false})

const Layout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout