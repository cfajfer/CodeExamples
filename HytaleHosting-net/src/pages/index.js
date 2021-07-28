import React, { Component, createRef } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import MailchimpForm from "../components/MailchimpForm";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Avatars from "../components/Avatars";
import FeatureCard from "../components/FeatureCard";
import Map from "../components/Map";
import TeamItem from "../components/TeamItem";
import Geolocation from "../components/Geolocation";

import Link from 'next/link';

import PlayButton from "../assets/play.svg";
import PauseButton from "../assets/pause.svg";
import FormButton from "../assets/form-button.svg";

import WebPanel from "../assets/features/web-panel.svg";
import Backups from "../assets/features/backups.svg";
import Hardware from "../assets/features/hardware.svg";
import Latency from "../assets/features/latency.svg";
import Storage from "../assets/features/storage.svg";
import UnlimitedPlayers from "../assets/features/unlimited-players.svg";

import Typed from 'react-typed';

import AOS from 'aos';
import "aos/dist/aos.css";

import { aosSettings } from '../utils/global';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
			videoState: false,
			isLocation: false,
			isSpinner: false,
		};

		this.video = createRef();
		this.videoButton = createRef();
	}

	componentDidMount() {
		AOS.init(aosSettings);
	}
	
	handleVideoButtonClick = () => {
		this.setState({
			videoState: !this.state.videoState
		}, () => {
			if(this.state.videoState) {
				this.video.current.play();
				this.video.current.controls = true;
			} else {
				this.video.current.pause();
				this.video.current.controls = false;
			}
		})
	}

    render() {
        return (
            <Layout>
                <Section name="section--overlay index__main" margin={false} image="/kweebec-background.png">
					<div className="margin">
						<div className="card card--translucent index__main" data-aos="fade-up">
							<div className="index__main-side">
								<h1 className="heading-primary">
									<span className="u-color-primary">
										<Typed
											strings={['Premium', 'Powerful', 'Reliable', 'Affordable']}
											typeSpeed={150}
											backSpeed={70}
											loop />
									</span>
									{' '}Hytale Server Hosting
								</h1>
								<ul className="index__main-list">
									<li className="index__main-item">
										<span className="u-color-primary">Instant Setup</span> - Gets you up and running in a snap!
									</li>
									<li className="index__main-item">
										<span className="u-color-primary">One-Click Mods</span> - Make each game unique!
									</li>
									<li className="index__main-item">
										<span className="u-color-primary">24/7 Support</span> - We're always here to help!
									</li>
									<li className="index__main-item">
										<span className="u-color-primary">DDoS Protection</span> - So you can play without worry!
									</li>
									<li className="index__main-item">
										<span className="u-color-primary">Worldwide Locations</span> - For super low-latency playing!
									</li>
									<li className="index__main-item">
										<span className="u-color-primary">Full File Access</span> - Imposes no artificial restrictions!
									</li>
								</ul>
							</div>
							<div className="index__main-side">
								<video
									onClick={this.handleVideoButtonClick}
									ref={this.video}
									className={`index__main-video${this.state.videoState ? ' index__main-video--active' : ''}`}
									poster="hosting-video.jpg">

									<source src="trailer.mp4" type="video/mp4" />
									Unsupported

								</video>
								<button
									ref={this.videoButton}
									onClick={this.handleVideoButtonClick} className="index__main-video-button">
									{this.state.videoState ? <PauseButton /> : <PlayButton />}
								</button>
								<Link href="/create">
									<a className="btn index__main-button">Create Server</a>
								</Link>
							</div> 
						</div>
					</div>
					<div className="index__banner">
						<div className="margin index__banner-inner">
							<img src="/kweebec.png" alt="Kweebec" className="index__banner-image"/>
							<div className="index__banner-main">
								<p className="index__banner-label">Subscribe to our Newsletter and be the first to find out when Hytale Servers become available!</p>
								<div className="index__banner-lower">
									<div className="form__input-container">
										<MailchimpForm />
									</div>
									<div className="index__banner-info">
										<h2 className="index__banner-info-heading"><span className="u-color-primary">SPECIAL</span> Offers</h2>
										<p className="index__banner-info-text">for pre-release subscribers</p>
									</div>
								</div>
							</div>
						</div>
					</div>
                </Section>
				<Section name="section--overlay index__avatars" margin={true} image="/lair.png">
					<Avatars animation={true} />
				</Section>
				<Section name="index__map" margin={true}>
					<div className="heading-container heading-container--center">
						<h1 className="heading-primary heading-primary--uppercase">
							Hytale{' '}
							<span className="u-color-primary">Server Locations</span>	
						</h1>
						<p className="heading-primary__sub--light">Select your next data center</p>
					</div>
					<Map />
					{this.state.isLocation === true ? <Geolocation/> : <div style={{padding: "0px"}} className="heading-container heading-container--center"><p className="heading-primary__sub--light"></p></div>}
					<button className="btn map__button" onClick={() => {this.setState({isLocation: true})}}>Find Best Location</button>
				</Section>
				<Section name="section--overlay index__features" margin={true}>
					<div className="heading-container heading-container--center">
						<h1 className="heading-primary heading-primary--uppercase">
							Hytale Server{' '}
							<span className="u-color-primary">Hosting Features</span>	
						</h1>
						<p className="heading-primary__sub--light">
							See why we're the{' '}
							<span className="u-color-primary">most optimal</span>
							{' '}Choice for future{' '}
							<span className="u-color-primary">Hytale Server</span>
							{' '}Owners
						</p>
					</div>
					<div className="index__features-container">
						<FeatureCard
							title="Custom Web Panel"
							image={<WebPanel className="index__features-image" />}
							description="Our custom, feature rich, and easy to use Hytale server management panel makes controlling and updating your Hytale server through Hytale Hosting extremely easy and convenient."
							delay={100} />
						<FeatureCard
							title="Unlimited Players"
							image={<UnlimitedPlayers className="index__features-image"/>}
							description="Host as many concurrent players on your Hytale server as you want. At Hytale Hosting, we put no artificial constraints on how many people you can let join your server at once!"
							delay={200} />
						<FeatureCard
							title="Ultra Low Latency"
							image={<Latency className="index__features-image" />}
							description="We offer several different data center locations around the globe allowing you to choose the closest Hytale Hosting location to you for the lowest possible latency."
							delay={300} />
						<FeatureCard
							title="Enterprise Hardware"
							image={<Hardware className="index__features-image" />}
							description="We utilize only the most premium systems available, with Dual Intel Xeon E5-2600 series processors, DDR4 ECC RAM, and Samsung 860 series SSDs running on each Hytale Hosting box!"
							delay={400} />
						<FeatureCard
							title="Limitless Storage"
							image={<Storage className="index__features-image" />}
							description="We offer unconstrained access to disk space and many other resources that your Hytale server uses in order to provide the most stable and enjoyable experience possible for your players."
							delay={500} />
						<FeatureCard
							title="Automated Backups"
							image={<Backups className="index__features-image" />}
							description="We automatically backup all of your server files every single day at no extra cost to you. Did you accidentally delete or misconfigure a file? Let us fix that for you!"
							delay={600} />
					</div>
				</Section>
				<Section name="index__team section--overlay" margin={true} image="/hytale-portal.jpg">
					<div className="heading-container heading-container--center">
						<h1 className="heading-primary heading-primary--uppercase">
							Meet Your{' '}
							<span className="u-color-primary">Support Team</span>	
						</h1>
						<p className="heading-primary__sub--light">
							Featuring industry{' '}
							<span className="u-color-primary">experts</span>
							{' '}and avid{' '}
							<span className="u-color-primary">Hytale enthusiasts</span>
						</p>
					</div>
					<ul className="team">
						{/* <TeamItem
							image="/team/pearson.png"
							name="Pearson Wright" /> */}
						<TeamItem
							image="/team/demonly.png"
							name="Isaac G." />
						<TeamItem
							image="/team/noah.png"
							name="Noah R." />
						<TeamItem
							image="/team/saqmpli.png"
							name="Chris H." />
						<TeamItem
							image="/team/crimzon.png"
							name="Easton S." />
						<TeamItem
							image="/team/nico.png"
							name="Nicholas T." />
						<TeamItem
							image="/team/demon.png"
							name="Robert H." />
					</ul>
				</Section>
            </Layout>
        );
    }
}

export default Index;
