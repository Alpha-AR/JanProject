import Navbar from "../shared/NavBar";
import Footer from "../shared/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className='flex-1 bg-gradient-to-r from-blue-50 to-cyan-50 '>
                <Component {...pageProps} />
            </div>
            <Footer />      
        </main>
        </>
    );
}
