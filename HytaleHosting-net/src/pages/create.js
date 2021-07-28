import Image from 'next/image';
import Link from 'next/link';

import Layout from "../components/Layout";
import Section from "../components/Section";
import Avatars from "../components/Avatars";
import Geolocation from "../components/Geolocation";
import ImageCarousel from '../components/ImageCarousel';
import Map from '../components/Map';
import React, { useState } from 'react';

const Partners = () => {

    const [isGeolocation, setIsGeolocation] = useState(false);

    let info = [
        {
            title: "Instant Setup",
            text: <>Our fully automated server deployment system will have your Hytale Server ready to go in a matter of minutes!</>
        },
        {
            title: "DDoS Protection",
            text: <>We utilize an extremely powerful layer of 960GBps worth of enterprise DDoS Protection!</>
        },
        {
            title: "Global Locations",
            text: <>Choose from 9 different locations across 3 different continents to host your Hytale server at!</>
        },
        {
            title: "24/7 Support",
            text: <>Our dedicated and professional support staff are available 24/7 to help you with whatever you need!</>
        },
    ]

    return (
        <Layout>
            <Section name="section--overlay section--border-bottom partners" margin={true} image="/hytale-farm.jpg">
                <div className="heading-container heading-container--center">
                    <h1 className="heading-primary heading-primary--uppercase">
                        Create Your{' '}
                        <span className="u-color-primary">Hytale Server</span>
                    </h1>
                    <p className="heading-primary__sub--light">
                        Select your preferred server plan!
                    </p>
                </div>
                <Avatars />
            </Section>
            <Section name="create__info" margin={true}>
                <div className="heading-container heading-container--center">
                    <h1 className="heading-primary heading-primary--uppercase">
                        All Plans{' '}
                        <span className="u-color-primary">Include</span>
                    </h1>
                    <p className="heading-primary__sub--light">
                        Check out all the features your server will come with!
                    </p>
                </div>
                <div className="create__info-wrapper">
                    <Image className="create__info-image" width={600} height={300} style={{color: 'red'}} src="/hytale-torch.jpg" />
                    <ul className="create__info-list">
                        {info.map(cur => (
                            <li className="create__info-item">
                                <div className="create__info-item-main">
                                    <Image width={64 * .3} height={95 * .3} src="/logo-small.png" />
                                    <h3>{cur.title}</h3>
                                </div>
                                <div className="create__info-item-text markdown">
                                    <p>{cur.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
            <Section name="section--overlay create__carousel section--border-top" margin={true} image="/hytale-jungle.jpg">
                <div className="heading-container heading-container--center">
                    <h2 className="heading-primary heading-primary--uppercase">
                        Powered by{' '}
                        <span className="u-color-primary">Pterodactyl</span>
                    </h2>
                    <p className="heading-primary__sub--light">
                        We provide a highly customized control panel which caters specifically to Hytale players!
                    </p>
                </div>
                <ImageCarousel
                    images={[
                        {
                            image: '/hytalehostingpanel.png',
                            icon: '/carousel/server-backups.png',
                            label: 'Server Backups'
                        },
                        {
                            image: '/hytalehostingpanel.png',
                            icon: '/carousel/configure-files.png',
                            label: 'Configure Files'
                        },
                        {
                            image: '/hytalehostingpanel.png',
                            icon: '/carousel/manage-server.png',
                            label: 'Manage Server'
                        },
                        {
                            image: '/hytalehostingpanel.png',
                            icon: '/carousel/chat-logs.png',
                            label: 'Chat Logs'
                        },
                        {
                            image: '/hytalehostingpanel.png',
                            icon: '/carousel/remote-console.png',
                            label: 'Remote Console'
                        }
                    ]} />
            </Section>
            <Section name="index__map" margin={true}>
                <div className="heading-container heading-container--center">
                    <h2 className="heading-primary heading-primary--uppercase">
                        Global{' '}
                        <span className="u-color-primary">Locations</span>	
                    </h2>
                    <p className="heading-primary__sub--light">We offer server hosting at 9 separate Data Centers spread across 3 different continents!</p>
                </div>
                <Map />
                {isGeolocation === true ? <Geolocation/> : <div style={{padding: "0px"}} className="heading-container heading-container--center"><p className="heading-primary__sub--light"></p></div>}
				<button className="btn map__button" onClick={() => setIsGeolocation(true)}>Find Best Location</button>
            </Section>
            <Section name="section--overlay faq section--border-top" margin={true} image="/hytale-background.jpg">
                <div className="heading-container heading-container--center">
                    <h2 className="heading-primary heading-primary--uppercase">
                        Frequently Asked{' '}
                        <span className="u-color-primary">Questions</span>
                    </h2>
                    <p className="heading-primary__sub--light">
                        Here's some answers to some of the most comment questions our clients ask us!
                    </p>
                </div>
                <ul className="faq__list">
                    {[
                        {
                            question: 'How long will it take to setup my server?',
                            answer: <>Your server will be setup instantaneously following purchase confirmation. Players should then be able to connect within a matter of seconds.</>
                        },
                        {
                            question: 'Can I upgrade/downgrade my server?',
                            answer: <>Certainly! You can upgrade or downgrade your server whenever you wish from within your Client Panel. <Link href="/about-us/money-back-guarantee"><a className="markdown__link">Learn more</a></Link>!</>
                        },
                        {
                            question: 'What is your refund policy?',
                            answer: <>We provide FULL and immediate refunds within 48 hours following any purchase, for any reason. No questions asked!</>
                        },
                        {
                            question: 'What forms of payment do you accept?',
                            answer: <>We accept all debit/credit cards endorsed by VISA, Discover, and Mastercard, as well as PayPal, and Bitcoin.</>
                        },
                        {
                            question: 'Can you help me grow my Hytale server?',
                            answer: <>Yes! We offer an addon which provides fully automated marketing and exposure for your server on various sites within the broader Hytale Hub Network.</>
                        },
                        {
                            question: 'Can I convert my Minecraft builds into Hytale?',
                            answer: <>We are currently working on integrating proprietary conversion software which will allow you to seamlessly convert your builds directly from Minecraft into Hytale!</>
                        }
                    ].map(cur => (
                        <li className="faq__item">
                            <Image src="/logo-small.png" width={32} height={48} className="faq__item-image" />
                            <div className="faq__item-content">
                                <h4 className="faq__question">{cur.question}</h4>
                                <p className="faq__answer">{cur.answer}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Section>
        </Layout>
    );
}
 
export default Partners;