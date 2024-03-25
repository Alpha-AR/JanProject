import React from "react";
import { connect } from "react-redux";
import { fetchUsername } from "../utils/redux/actions";
import { motion, AnimatePresence } from "framer-motion";
import { Header, Footer } from "../shared";
import { Toaster } from "react-hot-toast";
import "../assets/styles/globals.css";
import { Provider } from "react-redux";
import store from "../utils/redux/store";

class App extends React.Component {
   componentDidMount() {
      this.props.fetchUsername();
   }

   render() {
      const { userName, Component, pageProps } = this.props;

      return (
         <>
            <Provider store={store}>
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
                        className="absolute top-0 left-0 w-[100%] h-[100vh] bg-gradient-to-r from-blue-200 to-cyan-200 origin-bottom"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                     ></motion.div>
                     <motion.div
                        className="absolute top-0 left-0 w-[100%] h-[100vh] bg-gradient-to-r from-blue-200 to-cyan-200 origin-top"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                     ></motion.div>
                  </motion.div>
               </AnimatePresence>
            </Provider>
         </>
      );
   }
}
const mapStateToProps = (state) => ({
   userName: state.userName,
});

const mapDispatchToProps = {
   fetchUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
