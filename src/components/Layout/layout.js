
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