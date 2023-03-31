
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
    {/* <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0" class="gradient1"></stop><stop offset=".5" class="gradient2"></stop><stop offset="1" class="gradient1"></stop></linearGradient></defs><path fill="url('#grad1')" d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"></path> */}

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
      </div>

      <Footer />

    </>
  )
}



export default Layout;