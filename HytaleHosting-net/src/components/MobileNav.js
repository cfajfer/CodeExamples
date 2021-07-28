import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import MobileNavItem from './MobileNavItem';

import AddIcon from '../assets/add.svg';
import Twitter from "../assets/socials/twitter-fill.svg";
import Facebook from "../assets/socials/facebook-fill.svg";
import Discord from "../assets/socials/discord-fill.svg";

const MobileNav = (props) => {
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('click', handleWindowClick);
    }, [])

    const handleWindowClick = (e) => {
        if(e.target.closest('.mobile-nav') || e.target.closest('.nav__hamburger')) return;
        
        props.setMobileNav(false);
    }

    return (
        <CSSTransition
            in={props.mobileNav}
            timeout={300}
            classNames="mobile-nav__background"
            unmountOnExit>
            <div className="mobile-nav__background">
                <nav className="mobile-nav">
                    <div className="mobile-nav__header">
                        <Link href="/">
                            <a className="mobile-nav__logo-container">
                                <Image
                                    width={350 * .4}
                                    height={90 * .4}
                                    src="/logo.png"
                                    alt="Hytale Hosting logo"
                                    className="mobile-nav__logo"
                                />
                            </a>
                        </Link>
                        <button className="mobile-nav__cross" onClick={() => props.setMobileNav(false)}>
                            <AddIcon />
                        </button>
                    </div>
                    <ul className="mobile-nav__list">
                        <MobileNavItem router={router} link="/" label="Home" />
                        <MobileNavItem router={router} link="/create" label="Create" />
                        <MobileNavItem router={router} link="/partners" label="Partners" />
                        <MobileNavItem router={router} link="/blog" label="Blog" />
                        <MobileNavItem router={router} link="/community" label="Community" />
                        <MobileNavItem router={router} link="/about-us" label="About Us" />
                        <MobileNavItem router={router} link="/support" label="Support" />
                        <MobileNavItem router={router} link="/login" label="Login" />
                    </ul>
                    <div className="mobile-nav__footer">
                        <ul className="mobile-nav__social-list">
                            <li className="mobile-nav__social-item">
                                <Link href="/">
                                    <a className="mobile-nav__social-link">
                                        <Twitter />
                                    </a>
                                </Link>
                            </li>
                            <li className="mobile-nav__social-item">
                                <Link href="/">
                                    <a className="mobile-nav__social-link">
                                        <Facebook />
                                    </a>
                                </Link>
                            </li>
                            <li className="mobile-nav__social-item">
                                <Link href="/">
                                    <a className="mobile-nav__social-link">
                                        <Discord />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </CSSTransition>
    );
}
 
export default MobileNav;