import Link from 'next/link';

import { useRouter } from 'next/router';

const NavItem = (props) => {
    const router = useRouter();

    return (
        <li className="nav__item">
            <Link href={props.link}>
                <a className={`nav__link${props.link === router.asPath ? ' nav__link--active' : ''}${props.fill ? ' nav__link--fill' : ''}`}
                target={props.link == "https://hytalehub.com/" ? "_blank" : ''}>
                    {props.text}
                </a>
            </Link>
        </li>
    );
}
 
export default NavItem;