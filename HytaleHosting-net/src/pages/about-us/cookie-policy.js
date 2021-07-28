import AboutTemplate from '../../components/AboutTemplate';

const CookiePolicy = () => {

    return (
        <AboutTemplate
            title={<>Cookie <span className="u-color-primary">Policy</span></>}
            subtitle="Well... now I'm very hungry">
            <p className="about-us__section-description">Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</p>
            <p className="about-us__section-description">We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

        </AboutTemplate>
    );
}
 
export default CookiePolicy;