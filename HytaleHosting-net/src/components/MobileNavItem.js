import Link from 'next/link';

const MobileNavItem = (props) => {
    return (
        <li className="mobile-nav__item">
            <Link href={props.link}>
                <a className={`mobile-nav__link${props.router?.asPath === props.link ? ' mobile-nav__link--active' : ''}`}>{props.label}</a>
            </Link>
        </li>
    );
}
 
export default MobileNavItem;