import { useEffect } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";
import { aosSettings } from '../utils/global';

const MapLabel = (props) => {
    useEffect(() => {
        AOS.init(aosSettings);
    }, []);

    return (
        <div
            className={`map__label${props.flip ? ' map__label--flip' : ''}`}
            style={props.position}
            data-aos="fade-up"
            data-aos-delay={props.delay} >
            <img src="/logo-small.png" alt="Logo small" className="map__label-image"/>
            <span className="map__label-text">{props.label}</span>
        </div>
    );
}
 
export default MapLabel;