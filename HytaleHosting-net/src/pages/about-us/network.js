import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';
import Map from '../../components/Map';

const Network = () => {

    return (
        <AboutTemplate
            title={<>Our <span className="u-color-primary">Network</span></>}
            subtitle="Learn more about our network.">

            <p className="about-us__section-description">We offer a variety of different hosting locations at several data centers across four separate continents in order to ensure that both you and your players can enjoy the best experience possible. Our Network is supported by several global hosting giants and renowned industry experts with decades of proven experience in network quality, reliability, and efficiency. Our state-of-the-art data centers provide excellent and environmentally-friendly infrastructure monitored 24/7 by on-site technicians. Multi-redundant network connections also guarantee that your Hytale server(s) will experience 99.99% uptime.</p>
                
            <Map />

        </AboutTemplate>
    );
}
 
export default Network;