import { useState } from 'react';

import Nav from "./Nav";
import Footer from "./Footer";
import MobileNav from './MobileNav';

const Layout = (props) => {
    const [mobileNav, setMobileNav] = useState(false);

    return (
        <div className="root">
            <Nav mobileNav={mobileNav} setMobileNav={setMobileNav} />
            <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
            <main className="main">
                {props.children}
            </main>
            <Footer />
        </div>
    );
}
 
export default Layout;