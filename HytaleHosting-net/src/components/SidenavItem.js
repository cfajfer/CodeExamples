import Link from 'next/link';

import { useRouter } from 'next/router';

const SidenavItem = (props) => {
    const router = useRouter();
    console.log(router);
    return (
        <li className="sidenav__nav-item">
            <Link href={props.link}>
                <a className={`sidenav__nav-link${router.route === props.link ? ' sidenav__nav-link--active' : ''}`}>
                    {props.label}
                </a>
            </Link>
        </li>
    );
}

export default SidenavItem;