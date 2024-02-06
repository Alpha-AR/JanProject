import AppContext from "../contexts/AppContext";
import React, { useState, useEffect } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";
import '../assets/styles/globals.css';

export default function App({ Component, pageProps }) {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const storedCredentials = localStorage.getItem("credentials");
    if (storedCredentials) {
      const parsedCredentials = JSON.parse(storedCredentials);
      if (parsedCredentials.isLoggedIn === 1) {
        setUserName(parsedCredentials.name);
      }
    }
  }, []);
  return (
    <>
      <AppContext.Provider value={{ userName, setUserName }}>
        <div className="flex flex-col min-h-screen">
          <Header text={userName} />
          <div className="flex-1 bg-gradient-to-tr from-pink-50 to-white ">
            <Component {...pageProps} />
          </div>
          <Toaster position="bottom" />
          <Footer />
        </div>
      </AppContext.Provider>
    </>
  );
}