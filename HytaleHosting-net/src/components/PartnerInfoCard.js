import { useEffect } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";
import { aosSettings } from '../utils/global';

const PartnerInfoCard = (props) => {

    useEffect(() => {
        AOS.init(aosSettings);
    }, []);

    return (
        <li className="image-card" data-aos="fade-up" data-aos-delay={props.delay}>
            {props.image}
            <h3 className="image-card__title">{props.title}</h3>
            <p className="image-card__description">{props.description}</p>
        </li>
    );
}
 
export default PartnerInfoCard;