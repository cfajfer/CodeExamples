import { useEffect } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";
import { aosSettings } from '../utils/global';

const FeatureCard = (props) => {
    useEffect(() => {
        AOS.init(aosSettings);
    }, []);
    
    return (
        <div className="index__features-card" data-aos="fade-up" data-aos-delay={props.delay}>
            {props.image}
            <div className="index__features-info">
                <h3 className="index__features-title">{props.title}</h3>
                <p className="index__features-text">{props.description}</p>
            </div>
        </div>
    );
}
 
export default FeatureCard;