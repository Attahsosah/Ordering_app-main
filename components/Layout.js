import Footer from "./Footer"
import Navbar from "./Navbar"
import HeroCarousel from "./HeroCarousel"
import Items from "./Items";
import Menu from "./Menu";
import NewMenu from "./NewMenu";
import Meal from "./Meal";
import StickyFooter from "./StickyFooter";


function Layout({ children }) {
    return (
        <div className=" bg-black ">
            <>
                <Navbar />
                <HeroCarousel />
                <section id="offer" className='' >
                    <Items />
                </section>
                <section id="menu" className='snap-end' >
                    <NewMenu />
                </section>
                <Meal />
                {children}
                <StickyFooter />
                <Footer />
            </>
        </div>
    );
}

export default Layout
