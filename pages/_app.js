import { ColorProvider } from '../components/context/AppContext';
import Layout from '../components/Layout'
import '../styles/globals.css'
import "swiper/css/bundle";

function MyApp({ Component, pageProps, router}) {
  return (
    
  <ColorProvider className="overflow-hidden items-center">
    
    <div 
    key={router.route}
    className="transition-opacity duration-500"
    >
      <Component {...pageProps} />
      </div>
    
  </ColorProvider>
  );
  
}

export default MyApp
