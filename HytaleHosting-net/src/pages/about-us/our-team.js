import Link from 'next/link';

import TeamCard from '../../components/TeamCard';
import AboutTemplate from '../../components/AboutTemplate';

import Twitter from '../../assets/socials/twitter.svg';
import Discord from '../../assets/socials/discord.svg';
import Facebook from '../../assets/socials/facebook.svg';


const OurTeam = () => {

    return (
        <AboutTemplate
            title={<>Meet Our <span className="u-color-primary">Team</span></>}
            subtitle="Which one do you think is the best looking?">

            <p className="about-us__section-description">Below is a list of all of the awesome people that work tirelessly to provide you with the best possible Hytale Hosting experience out there today! Each individual listed here is either a founder or full time paid employee at Hytale Hosting.</p>
            <p className="about-us__section-description">As we continue to grow, we remain determined to build a company that represents the world that we live and play in, and we'd love your help! Want to the chance to work with some truly incredible people building something that will impact millions of Hytale players? Check out our Job Openings!</p>
            <ul className="about-us__ourteam-list">
                {/* <TeamCard
                    name="Pearson W"
                    title="Founder & CEO"
                    image="/team/pearson.png"
                    markdown={(
                        <>
                            <p>Pearson created Hytale Hosting in April in 2018 shortly after launching Hytale Hub in response to the unveiling of Hypixel Studios' brand new game - Hytale. Together, he and the rest of the Hytale Hosting Team are determined to deliver the best hosting experience for Hytale players at the most affordable prices.</p>
                            <ul>
                                <li>Website Design</li>
                                <li>Entrepreneurship</li>
                                <li>Community Management</li>
                            </ul>
                        </>
                    )}
                    socials={[
                        {
                            link: 'https://kubs.uk',
                            image: <Twitter className="footer__social-image" />,
                            color: '#1cb7eb'
                        },
                        {
                            link: 'https://kubs.uk',
                            image: <Discord className="footer__social-image" />,
                            color: '#8192e9'
                        }
                    ]} /> */}
                <TeamCard
                    name="Nicholas T"
                    title="Chief Technical Officer"
                    image="/team/nico.png"
                    markdown={(
                        <>
                            <p>Nicholas manages all infrastructual components of Hytale Hosting, from front and back end web development, to system administration and site security monitoring.</p>
                            <ul>
                                <li>Programming & Development</li>
                                <li>Playing Soccer</li>
                                <li>Playing Apex Legends</li>
                            </ul>
                        </>
                    )}
                    socials={[
                        {
                            link: '#',
                            image: <Twitter className="footer__social-image" />,
                            color: '#1cb7eb'
                        },
                        {
                            link: '#',
                            image: <Discord className="footer__social-image" />,
                            color: '#8192e9'
                        }
                    ]} />
                <TeamCard
                    name="Isaac G"
                    title="Operations Director"
                    image="/team/demonly.png"
                    markdown={(
                        <>
                            <p>Isaac is a programming veteran with many years of experience working for multiple Fortune 500 companies. He oversees the daily operations here at Hytale Hosting and works tirelessly to ensure that our servers are online, and running flawlessly 24/7.</p>
                            <ul>
                                <li>Programming & Development</li>
                                <li>Creating new startups</li>
                                <li>Playing Minecraft</li>
                            </ul>
                        </>
                    )}
                    socials={[
                        {
                            link: '#',
                            image: <Twitter className="footer__social-image" />,
                            color: '#1cb7eb'
                        },
                        {
                            link: '#',
                            image: <Discord className="footer__social-image" />,
                            color: '#8192e9'
                        }
                    ]} />
                <TeamCard
                    name="Noah R"
                    title="Customer Support Manager"
                    image="/team/noah.png"
                    markdown={(
                        <>
                            <p>Noah has been involved in several projects working together in hand with Nicholas during his online career. Having also helped jumpstart Hytale Hosting. He is the social butterfly of our team. He enjoys working hands on with customers in need of support or assistance. If he's not lurking in our live chat, you can rest assured that he's busy responding to support tickets from clients just like you!</p>
                            <ul>
                                <li>Playing Video Games</li>
                                <li>Socializing with friends</li>
                                <li>Studying Law & History</li>
                            </ul>
                        </>
                    )}
                    socials={[
                        {
                            link: '#',
                            image: <Twitter className="footer__social-image" />,
                            color: '#1cb7eb'
                        },
                        {
                            link: '#',
                            image: <Discord className="footer__social-image" />,
                            color: '#8192e9'
                        }
                    ]} />
            </ul>
        </AboutTemplate>
    );
}
 
export default OurTeam;