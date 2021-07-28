import Link from 'next/link';

import AboutTemplate from '../../components/AboutTemplate';

const SLA = () => {

    return (
        <AboutTemplate
            title={<>Money Back <span className="u-color-primary">Guarantee</span></>}
            subtitle="Your safety with us">
            
            <h3 className="u-margin-bottom-small">A Brief Introduction</h3>
            <p className="about-us__section-description">At Hytale Hosting, one of our highest priorities is ensuring that every client’s Hytale server remains online, and accessible as often as possible. We understand how crucial it is for game servers to maintain maximum availability, which is why we provide an SLA (Service Level Agreement) to cover our clients in the event of a service disruption.</p>
            <p className="about-us__section-description">We go to extensive measures to prevent our clients from experiencing unnecessary downtime or server outages, but sometimes unexpected issues arise.</p>
            <p className="about-us__section-description">The following services are covered by our Service Level Agreement: Hytale Server Hosting, Web Server Hosting, Dedicated Server Hosting</p>
            
            <h3 className="u-margin-bottom-small u-margin-top-large">SLA Coverage</h3>
            <p className="about-us__section-description">Our SLA only applies to the following types of interruptions:</p>
            <ul className="markdown__list">
                <li className="markdown__list-item">
                    <p className="about-us__section-description"><span className="u-color-primary u-weight-700">Network</span> - We guarantee 99.99% network availability to all applicable services. If at any time our service does not maintain this agreement for 5 consecutive minutes, the affected service will be covered by our SLA. Coverage exemptions include scheduled maintenance, personal ISP network outages, or personal network attacks such as a DDoS or other malicious occurrence.</p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description"><span className="u-color-primary u-weight-700">Hardware</span> - We guarantee our physical machines will be able to provide 99.99% uptime during any given month. In the event that one or more hardware components fail, server downtime will be measured after 4 hours from the initial report via either our internal reporting system or the first communication received through /chat/email from a customer. This 4 hour window will give our partner datacenters time to identify, diagnose, and replace any failed hardware within a reasonable amount of time.</p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description"><span className="u-color-primary u-weight-700">Denial of Service Attack (DoS/DDoS)</span> - We guarantee total protection against all types of Denial of Service attacks. If we are unable effectively to mitigate a denial of service attack for more than 5 consecutive minutes, the affected service will be covered by our SLA.</p>
                </li>
            </ul>
            <h3 className="u-margin-bottom-small u-margin-top-large">Terms & Regulations</h3>
            <p className="about-us__section-description">In order to receive compensation, the client must adhere to & acknowledge the following terms:</p>
            <ul className="markdown__list">
                <li className="markdown__list-item">
                    <p className="about-us__section-description">This SLA is only valid for direct clients of Hytale Hosting. Hytale Hosting is not liable for downtime caused by any reseller of it's services.</p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description">For every minute of downtime, Hytale Hosting will provide an equivalent extension to the affected service, rounded up to the nearest day.</p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description">All SLA claims will be investigated. The outcome of such claims will be decided at the sole discretion of Hytale Hosting.</p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description">To receive service compensation, the client must create an SLA claim via support ticket from their authorised client account.</p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description">Any SLA claims we deem to be fraudulent will be rejected.</p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description">SLA claims must be submitted within one week (seven days) of the outage.</p>
                </li>
                <li className="markdown__list-item">
                    <p className="about-us__section-description">We deserve the right to deny SLA claims if we believe the client has purposely attempted to cause a service disruption to claim against our SLA (e.g: if we believe the client was involved in initiating a denial of service attack against their own service).</p>
                </li>
            </ul>
            
            <h3 className="u-margin-bottom-small u-margin-top-large">SLA Policy Changes</h3>
            <p className="about-us__section-description">Hytale Hosting reserves the right to amend or adjust the terms of our SLA at any time. Any changes will be reflected immediately on this page.</p>
            <p className="about-us__section-description">You are advised to review our SLA periodically for any changes. Changes to the SLA are effective when they are posted on this page.</p>
            
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