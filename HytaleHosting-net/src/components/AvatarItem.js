import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import "aos/dist/aos.css";
import { aosSettings } from '../utils/global';

const AvatarItem = (props) => {
    useEffect(() => {
        AOS.init(aosSettings);
    }, []);

    return (
        <Link href="/checkout">
        <li
            className={`avatars__item${props.noHover ? ' avatars__item--no-hover' : ''}`}
            data-aos={props.animation ? 'fade-up' : ''}
            data-aos-delay={props.animation ? props.delay : ''}>
                
            <img src={props.image} alt={props.name} className="avatars__image"/>
            <div className="avatars__info">
                <h3 className="avatars__name">{props.name}</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>RAM:</th>
                            <td>{props.specs.ram}</td>
                        </tr>
                        <tr>
                            <th>VCPUs:</th>
                            <td>{props.specs.vcpu}</td>
                        </tr>
                        <tr>
                            <th>Player Cap:</th>
                            <td>{props.specs.playerCap}</td>
                        </tr>
                    </tbody>
                </table>
                <h5 className="avatars__price">
                    <span style={{color: "#00f0bb"}}>{props.price}</span>
                    / Month
                </h5>
            </div>
            {props.handleAvatarSwitch
                ? (
                    <button
                        className="avatars__button btn"
                        data-plan={props.name}
                        onClick={props.handleAvatarSwitch}>
                        Select Plan
                    </button>
                ) : (
                    <a className="avatars__button btn">Select Plan</a>
                )}
        </li>
        </Link>
    );
}
 
export default AvatarItem;