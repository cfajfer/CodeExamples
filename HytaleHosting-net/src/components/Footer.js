import Link from 'next/link';

import Visa from '../assets/payment/visa.svg'
import Amex from '../assets/payment/amex.svg'
import Bitcoin from '../assets/payment/bitcoin.svg'
import Mastercard from '../assets/payment/mastercard.svg'
import Paypal from '../assets/payment/paypal.svg';

import Twitter from '../assets/socials/twitter.svg';
import Discord from '../assets/socials/discord.svg';
import Facebook from '../assets/socials/facebook.svg';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__main-margin">
                    <div className="footer__links">
                        <div className="footer__link-container">
                            <h4 className="footer__link-title">Support</h4>
                            <ul className="footer__link-list">
                                <li className="footer__link-item">
                                    <Link href="/support">
                                        <a className="footer__link">Knowledgebase</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/support">
                                        <a className="footer__link">Submit a Ticket</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/support">
                                        <a className="footer__link">Livechat</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/about-us/network">
                                        <a className="footer__link">Network Status</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/about-us/contact-us">
                                        <a className="footer__link">Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__link-container">
                            <h4 className="footer__link-title">Company</h4>
                            <ul className="footer__link-list">
                                <li className="footer__link-item">
                                    <Link href="/about-us">
                                        <a className="footer__link">About Us</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/about-us/jobs">
                                        <a className="footer__link">Jobs</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/partners">
                                        <a className="footer__link">Partners</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/partners">
                                        <a className="footer__link">Earn Money</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/create">
                                        <a className="footer__link">Create Server</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/">
                                        <a className="footer__link">Control Panel</a>
                                    </Link>
                                </li>
                                <li className="footer__link-item">
                                    <Link href="/">
                                        <a className="footer__link">Billing Area</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__company">
                            <h4 className="footer__link-title">About Hytale Hosting</h4>
                            <p className="footer__link-text">Hytale Hosting is pioneering the way forwards for game server owners looking to stake their claim in the Hytale community. Our mission is to offer the highest quality Hytale Server Hosting opportunities at the most affordable possible prices.</p>
                        </div>
                    </div>
                    
                    <div className="footer__social">
                        <div className="footer__social-logo-container">
                            <img src="/logo-small-footer.png" alt="Hytale Hosting Logo Small" className="footer__social-logo-background" />
                            <img src="/logo.png" alt="Hytale Hosting Logo" className="footer__social-logo" />
                        </div>
                        <div className="footer__social-info">
                            <p className="footer__social-label">Connect with us!</p>
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
                </div>
            </div>
            <div className="footer__legal">
                <div className="footer__legal-inner margin">
                    <div className="footer__legal-info">
                        <p className="footer__legal-info-text">© 2020 - {new Date().getFullYear()} HytaleHosting.net All Rights Reserved</p>
                        <p className="footer__legal-info-text">This site is not affiliated with Hytale or Hypixel Studios. Some images are trademarked property of Hypixel Studios.</p>
                    </div>
                    <ul className="footer__legal-payment-list">
                        <li className="footer__legal-payment-item footer__legal-payment-item--amex">
                            <Amex className="footer__legal-payment-image" />
                        </li>
                        <li className="footer__legal-payment-item footer__legal-payment-item--visa">
                            <Visa className="footer__legal-payment-image" />
                        </li>
                        <li className="footer__legal-payment-item footer__legal-payment-item--mastercard">
                            <Mastercard className="footer__legal-payment-image" />
                        </li>
                        <li className="footer__legal-payment-item footer__legal-payment-item--paypal">
                            <Paypal className="footer__legal-payment-image" />
                        </li>
                        <li className="footer__legal-payment-item footer__legal-payment-item--bitcoin">
                            <Bitcoin className="footer__legal-payment-image" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;