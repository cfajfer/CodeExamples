import Layout from "./Layout";
import Section from "./Section";
import Sidenav from "./Sidenav";

const AboutTemplate = (props) => {
    return (
        <Layout>
            <Section name="about-us section--overlay" margin={true} image={props.backgroundImage || '/hytale-portal.jpg'}>
                <div className="heading-container">
                    <h2 className="heading-primary u-color-primary">About Us</h2>
                    <p className="heading-primary__sub">Get to know us better!</p>
                </div>
                <div className="about-us__container">
                    <div className="about-us__side">
                        <Sidenav />
                    </div>
                    <div className="about-us__main">
                        <div className="about-us__section about-us__ourteam">
                            <div className="about-us__section-heading">
                                <h3 className="about-us__section-title">{props.title}</h3>
                                <p className="about-us__section-subtitle">{props.subtitle}</p>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
 
export default AboutTemplate;