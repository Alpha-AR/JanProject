import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  );
}
