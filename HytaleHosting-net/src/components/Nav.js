import { useState } from "react";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";

import Link from "next/link";
import Image from "next/image";

import Twitter from '../assets/socials/twitter.svg';
import Discord from '../assets/socials/discord.svg';
import Facebook from '../assets/socials/facebook.svg';

import Hamburger from "./Hamburger";


const Nav = (props) => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const handleDropdownMouseOver = (e) => {
        if(e.target.closest('.dropdown__container')) setDropdownActive(true);
    }

    return (
            <nav className="nav">
                <div className="nav__inner">
                    <Link href="/">
                        <a className="nav__logo-container">
                            <img width={350 * .65}
                                height={90 * .65}
                                src="/logo.png"
                                alt="Hytale Hosting logo"
                                className="nav__logo"
                            />
                        </a>
                    </Link>
                    <ul className="nav__list">
                        <NavItem link="/create" text="Create" />
                        <NavItem link="/partners" text="Partners" active={true} />
                        <NavItem link="/blog" text="Blog" />
                        <NavItem link="https://hytalehub.com/" text="Community" />
                        <NavItem link="/about-us" text="About Us" />
                        <NavItem link="/support" text="Support" />
                    </ul>
                    <div className="nav__right">
                        <ul className="nav__social-list">
                            <li className="footer__social-item">
                                <a href="https://twitter.com/hytalehosting" className="footer__icon-hover" style={{backgroundColor: '#1cb7eb'}}>
                                    <Twitter className="footer__social-image" />
                                </a>
                            </li>
                            <li className="footer__social-item">
                                <a href="https://discord.gg/wpK2pS4" className="footer__icon-hover" style={{backgroundColor: '#8192e9'}}>
                                    <Discord className="footer__social-image" />
                                </a>
                            </li>
                            <li className="footer__social-item">
                                <a href="https://facebook.com/hytalehosting" className="footer__icon-hover" style={{backgroundColor: '#3a579b'}}>
                                    <Facebook className="footer__social-image" />
                                </a>
                            </li>
                        </ul>

                        <div
                            className="nav__login-container dropdown__container"
                            onMouseOver={handleDropdownMouseOver}
                            onMouseLeave={() => setDropdownActive(false)}>
                            <Link href="/login">
                                <a className="nav__dropdown-button">
                                    <span className="nav__dropdown-button-text">Login</span>
                                    <div className="nav__dropdown-button-chevron-container">
                                        <span className="nav__dropdown-button-chevron"></span>
                                    </div>
                                </a>
                            </Link>
                            <Dropdown
                                active={dropdownActive}
                                links={[
                                    {
                                        label: 'Client Area',
                                        subLabel: 'Billing & Support',
                                        link: '/'
                                    },
                                    {
                                        label: 'Control Panel',
                                        subLabel: 'Hytale Server Management',
                                        link: '/'
                                    }
                                ]} />
                        </div>
                        <Hamburger mobileNav={props.mobileNav} setMobileNav={props.setMobileNav} />
                    </div>
                </div>
            </nav>
    );
}

export default Nav;