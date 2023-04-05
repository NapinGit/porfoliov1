
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/router";

import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className='background_container'>
        {/* div fou la merde dans le flex */}
        <div className='corner-top-left'>
          <svg width="300" height="300" data-name="corner-top-left" xmlns="http://www.w3.org/2000/svg" data-inlinesvg=".inlineSvgFile-2">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0" className="gradient1"></stop><stop offset=".5" className="gradient2">
              </stop><stop offset="1" className="gradient1"></stop>
              </linearGradient></defs><path fill="url('#grad1')" d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"></path></svg>
        </div>

        <div className='content_container'>
          <AnimatePresence mode="wait">

            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.75,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                animateState: {
                  opacity: 1,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                exitState: {
                  opacity: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
              }}
              className="base-page-size"
            >


              <div className='police'>
                <main>{children}</main>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div>
        <div className='corner-bot-right'>
          <svg width="300" height="300" data-name="corner-bottom-right" xmlns="http://www.w3.org/2000/svg" data-inlinesvg=".inlineSvgFile-4">
            <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0" className="gradient1"></stop>
              <stop offset=".5" className="gradient2"></stop><stop offset="1" className="gradient1"></stop></linearGradient></defs>
            <path fill="url('#grad2')" d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"></path></svg>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}



export default Layout;