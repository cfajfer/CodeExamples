import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Sidenav from "../../components/Sidenav";

const AboutUs = () => {
    return (
        <Layout>
            <Section name="about-us section--overlay" margin={true} image="/hytale-portal.jpg">
                <div className="heading-container">
                    <h2 className="heading-primary u-color-primary">About Us</h2>
                    <p className="heading-primary__sub">Get to know us better!</p>
                </div>
                <div className="about-us__container">
                    <div className="about-us__side">
                        <Sidenav />
                    </div>
                    <div className="about-us__main">
                        <img src="/hytale-lair.jpg" alt="Hytale Lair" className="about-us__main-background-image about-us__main-background-image--overlay"/>
                        <div className="about-us__section about-us__hytalehosting">
                            <img src="/logo.png" alt="Hytale Hosting Logo" className="about-us__hytalehosting-image"/>
                            <h2 className="about-us__hytalehosting-title">We're pioneering Game Server Hosting in Hytale</h2>
                            <div className="about-us__hytalehosting-text-container">
                                <p className="about-us__hytalehosting-text">We're a dedicated group of industry experts and avid Hytale enthusiasts spearheading the movement to bring innovative Game server hosting to Hytale! We've incorporated only the best aspects of what comprises a truly great server host - reliability, affordability, simplicity</p>
                                <p className="about-us__hytalehosting-text">We offer cutting-edge technology, 24/7 support, and enterprise quality hosting solutions at a fraction of the regular market price. Join us, and let's discover the world of Hytale together!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
 
export default AboutUs;