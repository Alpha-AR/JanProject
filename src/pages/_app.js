import AppContext from "../contexts/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Header, Footer } from "../shared";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import "../assets/styles/globals.css";

export default function App({ Component, pageProps }) {
   const [userName, setUserName] = useState(null);
   const router = useRouter();
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
            <AnimatePresence mode="wait">
               <motion.div key={router.pathname}>
                  <div className="flex flex-col min-h-screen">
                     <Header text={userName} />
                     <div className="flex-1 bg-gradient-to-tr from-pink-50 to-white ">
                        <Component {...pageProps} />
                     </div>
                     <Toaster position="bottom" />
                     <Footer />
                  </div>
                  <motion.div
                     className= "absolute top-0 left-0 w-[100%] h-[100vh] bg-gradient-to-r from-blue-200 to-cyan-200 origin-bottom"
                     initial={{ scaleY: 0 }}
                     animate={{ scaleY: 0 }}
                     exit={{ scaleY: 1 }}
                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  ></motion.div>
                  <motion.div
                     className= "absolute top-0 left-0 w-[100%] h-[100vh] bg-gradient-to-r from-blue-200 to-cyan-200 origin-top"
                     initial={{ scaleY: 1 }}
                     animate={{ scaleY: 0 }}
                     exit={{ scaleY: 0 }}
                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  ></motion.div>
               </motion.div>
            </AnimatePresence>
         </AppContext.Provider>
      </>
   );
}
