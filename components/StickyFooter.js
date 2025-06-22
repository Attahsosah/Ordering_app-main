import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useContext, useState, useEffect } from "react";
import { StagedContext, CartContext, SelectedContext } from './context/AppContext'

export default function StickyFooter() {
    const [scrolled, setScrolled] = useState(false);
    const [chosen, setChosen] = useState(false)
    const [cart, setCart] = useContext(CartContext)

    const scrollChange = () => {
        if (window.scrollY > 60) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollChange)
        return () => {
            window.removeEventListener("scroll", scrollChange)
        }
    }, [])

    const footerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            animate={scrolled ? "visible" : "hidden"}
            className="sticky bottom-11 w-full cursor-pointer"
        >
            <div className='flex items-center justify-end pr-4'>
                <div className={chosen ? '' : 'hidden'}>
                    {/* <SideBar /> */}
                </div>
                <ShoppingCartIcon onClick={() => setChosen(true)} className='h-7 w-7 text-yellow-700 z-10 rounded-full filter grayscale hover:gray-scale-0 cursor-pointer top-0' />
                <div className={chosen ? "transition-all ease-in-out text-white" : 'hidden'} onClick={() => setChosen(false)}>X</div>
            </div>
        </motion.footer>
    )
} 