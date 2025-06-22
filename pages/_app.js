import { ColorProvider } from '../components/context/AppContext';
import Layout from '../components/Layout'
import '../styles/globals.css'
import "swiper/css/bundle";

const { motion } = require("framer-motion");

function MyApp({ Component, pageProps, router}) {
  return (
    
  <ColorProvider className="overflow-hidden items-center">
    
    <motion.div 
    key={router.route}
    initial="pageinitial"
    animate="pageAnimate"
    transition="pageTransition"
    variants={{
      pageinitial:{
        opactiy:0
      },
      pageAnimate:{
        opacity:1
      },
      pageTransition:{
        duration:5.0
      }
    }}
    >
      <Component {...pageProps} />
      </motion.div>
    
  </ColorProvider>
  );
  
}

export default MyApp
