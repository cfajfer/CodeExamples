import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';

const SLA = () => {

    return (
        <AboutTemplate
            title={<>Privacy <span className="u-color-primary">Policy</span></>}
            subtitle="Keep up to date with our policy">
            
            <h3 className="u-margin-bottom-small">A Brief Introduction</h3>
            <p className="about-us__section-description">This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our service(s), as well as the choices you have associated with that information. We will not use or share your personal information with anyone, and your data will be retained only to the extent necessary to comply with our own legal obligations. Your personal information is primarily used solely for the purpose of improving your own experience whilst using our service(s).</p>
            <p className="about-us__section-description">By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our <Link href="/about-us/terms-of-service"><a className="markdown__link">Terms of Service</a></Link>.</p>
            
            <h3 className="u-margin-bottom-small u-margin-top-large">Personal Information</h3>
            <p className="about-us__section-description">While using our Service(s), we may ask you to provide us with certain personally identifiable information that may be used in order to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email, phone number, and/or postal address.</p>
            <p className="about-us__section-description">Any personal information you provide us with will not be given to any unaffiliated outside parties for any purpose. Your personal information is solely for use on HytaleHosting.org.</p>
            <p className="about-us__section-description">We may use your Personal Information in order to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you relating to HytaleHosting or its subsidiaries or partners. You may opt out of receiving any, or all forms of these communications from us by clicking the unsubscribe link or instructions provided in any email we send.</p>
            
            <h3 className="u-margin-bottom-small u-margin-top-large">Security</h3>
            <p className="about-us__section-description">The security and privacy of your personal information is important to us. We’ve carefully implemented a variety of security measures to ensure that all of your personal data remains under strict lock and key so that it won’t ever fall into the wrong hands.</p>
            <p className="about-us__section-description">Some user data is stored in your browser’s cookies. However, under no circumstances does this data entail any sensitive or personally identifiable information (such as passwords or postal addresses).</p>
            <p className="about-us__section-description">All plaintext user-provided data is stored within our database: (username, email, address, etc). Any sensitive and/or starred out information (such as passwords) is hashed with MD-5 64 bit encryption methods and is virtually indecipherable.</p>
            <p className="about-us__section-description">We store your account password using an extremely strong, and totally custom hash function. This means that it would be wildly expensive and virtually impossible for an attacker to decipher your password, even if they gained access to the hashes.</p>
            <p className="about-us__section-description">Private information such as credit card numbers are not stored in our database and never will be. All payments are securely processed by third party providers such as Stripe and/or PayPal.</p>
            
            
            <h3 className="u-margin-bottom-small u-margin-top-large">Log Data</h3>
            <p className="about-us__section-description">We routinely collect information that your browser sends whenever you visit our website. ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, as well as other various statistics.</p>
            
            
            <h3 className="u-margin-bottom-small u-margin-top-large">Links to Other Sites</h3>
            <p className="about-us__section-description">Our website may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
            <p className="about-us__section-description">We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
            
            <h3 className="u-margin-bottom-small u-margin-top-large">Changes to this Privacy Policy</h3>
            <p className="about-us__section-description">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <p className="about-us__section-description">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            
            <h3 className="u-margin-bottom-small u-margin-top-large">Contact Us</h3>
            <p className="about-us__section-description">If you have any questions regarding our Service Level Agreement, please contact us:</p>
            <ul className="markdown__list">
                {/* <li className="markdown__list-item">
                    <p className="about-us__section-description">By email: <a className="markdown__link" href="mailto:support@hytalehosting.org">support@hytalehosting.org</a></p>
                </li> */}
                <li className="markdown__list-item">
                    <p className="about-us__section-description">By visiting this page on our website: <Link href="/about-us/contact-us"><a className="markdown__link">Contact Us</a></Link></p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description">On Twitter: <a className="markdown__link" href="https://twitter.com/HostingHytale">https://twitter.com/HostingHytale</a></p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description">On Discord: <a className="markdown__link" href="https://discord.gg/VAUmtYn">https://discord.gg/VAUmtYn</a></p>
                </li>
            </ul>
        </AboutTemplate>
    );
}
 
export default SLA;