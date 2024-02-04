// import Header from "../shared/Header";
// import Footer from "../shared/Footer";
// import "../styles/globals.css";

// export default function App({ Component, pageProps }) {
//     return (
//         <>
//         <main className="flex flex-col min-h-screen">
//             <Header />
//             <div className='flex-1 bg-gradient-to-tr from-pink-50 to-white '>
//                 <Component {...pageProps} />
//             </div>
//             <Footer />      
//         </main>
//         </>
//     );
// }

// In /pages/_app.js
import AppContext from '../contexts/AppContext';
import React, {useState} from 'react';
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    const [userName, setUserName] = useState(null);
    return (
        <>
            <AppContext.Provider value={{ userName, setUserName }}>
                <div className="flex flex-col min-h-screen">
                    <Header text={userName} />
                    <div className='flex-1 bg-gradient-to-tr from-pink-50 to-white '>
                        <Component {...pageProps} />
                    </div>
                    <Footer />
                </div>
            </AppContext.Provider>
        </>
    );
}