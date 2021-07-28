import SidenavItem from './SidenavItem';

import Twitter from '../assets/socials/twitter.svg';
import Discord from '../assets/socials/discord.svg';
import Facebook from '../assets/socials/facebook.svg';

import TriangleIcon from '../assets/form-button.svg';

const BlogNav = (props) => {

    return (
        <div className="sidenav">
            <div className="sidenav__nav-section sidenav__nav-section--responsive-grow">
                <h3 className="sidenav__nav-title">Blog Search</h3>
                <div className="sidenav__nav-input">
                    <input type="text" className="form__input" placeholder="Search for a blog..." />
                    <button className="form__inside-button">
                        <TriangleIcon />
                    </button>
                </div>
            </div>

            <div className="sidenav__nav-section">
                <h3 className="sidenav__nav-title">Categories</h3>
                <ul className="sidenav__nav-list">
                    <SidenavItem link={`/blog`} label="All Categories" />
                    {props.categories.map(cur => (
                        <SidenavItem link={`/blog/categories/${cur.slug}`} label={cur.name} />
                    ))}
                </ul>
            </div>
            <div className="sidenav__nav-section">
                <h3 className="sidenav__nav-title">Recent Articles</h3>
                <ul className="sidenav__nav-list">
                    {props.articles.map(cur => (
                        <SidenavItem link={`/blog/${cur.slug}`} label={cur.title} />
                    ))}
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
 
export default BlogNav;