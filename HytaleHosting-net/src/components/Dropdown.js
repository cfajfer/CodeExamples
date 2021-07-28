import Link from "next/link";
import { useEffect, useState } from "react";

import { CSSTransition } from 'react-transition-group'

const Dropdown = (props) => {
    const [active, setActive] = useState(props.active);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <CSSTransition
            in={active}
            timeout={200}
            classNames="dropdown"
            unmountOnExit
        >
            <div className="dropdown">
                <ul className="dropdown__list">
                    {props.links.map(cur => (
                        <li className="dropdown__item" key={ Math.random().toString(36).substr(2, 9) }>
                            <Link href={cur.link}>
                                <a className="dropdown__link">
                                    <p className="dropdown__label">{cur.label}</p>
                                    <span className="dropdown__sublabel">{cur.subLabel}</span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </CSSTransition>
    );
}
 
export default Dropdown;