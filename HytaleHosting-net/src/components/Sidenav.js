import React, { Component } from 'react';

import SidenavItem from './SidenavItem';

import Twitter from '../assets/socials/twitter.svg';
import Discord from '../assets/socials/discord.svg';
import Facebook from '../assets/socials/facebook.svg';

class AboutNav extends Component {
    render() { 
        return (
            <div className="sidenav__nav">
                <div className="sidenav__nav-section">
                    <h3 className="sidenav__nav-title">General</h3>
                    <ul className="sidenav__nav-list">
                        <SidenavItem link="/about-us" label="Hytale Hosting" />
                        <SidenavItem link="/about-us/our-team" label="Our Team" />
                        <SidenavItem link="/about-us/faq" label="FAQ" />
                        <SidenavItem link="/about-us/contact-us" label="Contact Us" />
                        <SidenavItem link="/about-us/jobs" label="Jobs" />
                        <SidenavItem link="/about-us/network" label="Network" />
                        <SidenavItem link="/about-us/server-specs" label="Server Specs" />
                        <SidenavItem link="/about-us/branding" label="Branding" />
                    </ul>
                </div>
                <div className="sidenav__nav-section">
                    <h3 className="sidenav__nav-title">Company Info</h3>
                    <ul className="sidenav__nav-list">
                        <SidenavItem link="/about-us/money-back-guarantee" label="Money Back Guarantee" />
                        <SidenavItem link="/about-us/terms-of-service" label="Terms of Service" />
                        {/* <SidenavItem link="/about-us/usage-policy" label="Usage Policy" /> */}
                        <SidenavItem link="/about-us/service-level-agreement" label="Service Level Agreement" />
                        <SidenavItem link="/about-us/privacy-policy" label="Privacy Policy" />
                        <SidenavItem link="/about-us/cookie-policy" label="Cookie Policy" />
                    </ul>
                </div>
                <div className="sidenav__nav-section sidenav__nav-section--padding">
                    <p className="footer__social-label u-weight-700">Connect with us!</p>
                    <ul className="footer__social-list">
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
                </div>
            </div>
        );
    }
}
 
export default AboutNav;