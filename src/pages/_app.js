import Header from "../shared/Header";
import Footer from "../shared/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className='flex-1 bg-gradient-to-tr from-pink-50 to-white '>
                <Component {...pageProps} />
            </div>
            <Footer />      
        </main>
        </>
    );
}
