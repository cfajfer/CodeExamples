import Layout from "../../components/Layout";
import Section from "../../components/Section";
import PartnerInfoCard from "../../components/PartnerInfoCard";
import PartnerItem from "../../components/PartnerItem";
import ContactForm from "../../components/ContactForm";

import Commisions from '../../assets/partnerinfo/commisions.svg';
import Discounts from '../../assets/partnerinfo/discounts.svg';
import CustomCodes from '../../assets/partnerinfo/custom-codes.svg';
import Support from '../../assets/partnerinfo/support.svg';
import Buytale from '../../assets/partnerinfo/buytale.svg';
import ServerAccess from '../../assets/partnerinfo/server-access.svg';

const Partners = () => {

    return (
        <Layout>
            <Section name="section--overlay partners" margin={true} image="/hytale-portal.jpg">
                <div className="heading-container heading-container--center">
                    <h1 className="heading-primary heading-primary--uppercase">Become a Partner!</h1>
                    <p className="heading-primary__sub--light">
                        Here's what{' '}
                        <span className="u-color-primary">Becoming a Partner</span>
                        {' '} means:
                    </p>
                </div>
                <ul className="image-card__list">
                    <PartnerInfoCard
                        image={<Commisions className="image-card__image" />}
                        title="Greater Commisions"
                        description="Partners receive up to 25% commissions via direct payouts, and 45% commissions via website credit from referrals!"
                        delay={100} />
                    <PartnerInfoCard
                        image={<Discounts className="image-card__image" />}
                        title="Custom Discounts"
                        description="Receive huge discounts, and even free services to help get your Hytale community on top of the charts!"
                        delay={200} />
                    <PartnerInfoCard
                        image={<CustomCodes className="image-card__image" />}
                        title="Custom Partner Codes"
                        description="Share your earnings with your fanbase by creating your own fully customizable promo code to encourage future signups." 
                        delay={300} />
                    <PartnerInfoCard
                        image={<Support className="image-card__image" />}
                        title="Prioritized Support"
                        description="Receive access to our private Discord server for the best possible support available as long as you remain a partner!"
                        delay={400} />
                    <PartnerInfoCard
                        image={<Buytale className="image-card__image" />}
                        title="Buytale Enterprise"
                        description="Get lifetime access to Buytale's all-inclusive 'Enterprise' plan to maximize your Hytale server's revenue potential."
                        delay={500} />
                    <PartnerInfoCard
                        image={<ServerAccess className="image-card__image" />}
                        title="Priority Server Access"
                        description="Choose any server location you want! Regardless of whether or not it's out of stock, we'll make room for you."
                        delay={600} />
                </ul>
            </Section>
            <Section name="section--overlay-shadow section--border-top partners" margin={true}>
                <div className="heading-container heading-container--center">
                    <h2 className="heading-primary heading-primary--uppercase">Our Partners</h2>
                    <p className="heading-primary__sub--light">We collaborate with some of the most well-known people in the community!</p>
                </div>
                <ul className="partner__list">
                    <PartnerItem
                        style={{backgroundColor: '#030301'}}
                        image="/partners/buytale.png"
                        link="https://buytale.org/"
                        label="Buytale"
                        description="Buytale is pioneering game server monetization in the brand new Sandbox MMO, Hytale." />
                    <PartnerItem
                        style={{backgroundColor: '#111'}}
                        image="/partners/hytalebot.png"
                        link="https://hytalebot.net/"
                        label="Hytale Bot"
                        description="Get the latest Hytale blog posts, host giveaways, welcome new members, collect donations, and much more!" />
                    <PartnerItem
                        image="/partners/hytalehub.jpg"
                        link="https://hytalehub.com/"
                        label="Hytale Hub"
                        description="HytaleHub.com is a brand new community forums website created for all Hytale fans." />
                    <PartnerItem
                        image="/partners/hytalenames.jpg"
                        link="https://hytalenames.org/"
                        label="Hytale Names"
                        description="Find out if your desired Hytale Name has been claimed or reserved, and see who owns specific Hytale Account Names." />
                </ul>
            </Section>
            <Section name="section--overlay section--border-top partners" margin={true} image="desert.jpg">
                <div className="heading-container heading-container--center">
                    <h2 className="heading-primary">
                        Apply for{' '}
                        <span className="u-color-primary">Partnership</span>
                        !
                    </h2>
                    <p className="heading-primary__sub--light">Are you ready to join our ranks?</p>
                </div>
                <ContactForm contact={"partner"} />
            </Section>
        </Layout>
    );
}
 
export default Partners;