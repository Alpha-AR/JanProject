import Navbar from "../shared/navBar";
import Footer from "../shared/footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <>
  <main className= 'bg-gradient-to-r from-blue-50 to-cyan-50'>
      <Navbar/>
      <Component {...pageProps }  />
      <Footer/>
  </main>
  </>
  );
}
