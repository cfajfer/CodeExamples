import React, { Component } from 'react';

import AvatarItem from './AvatarItem';
import CheckoutProgress from './CheckoutProgress';

import Plan from './checkout-pages/Plan';
import Location from './checkout-pages/Location';
import Verification from './checkout-pages/Verification';
import Configuration from './checkout-pages/Configuration';
import BonusPerks from './checkout-pages/BonusPerks';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                    label: 'Plan',
                    section: 'plan'
                },
                {
                    label: 'Location',
                    section: 'location'
                },
                {
                    label: 'Verification',
                    section: 'verification'
                },
                {
                    label: 'Configuration',
                    section: 'configuration'
                },
                {
                    label: 'Bonus Perks',
                    section: 'bonus-perks'
                }
            ],
            section: 'plan',
            plan: {
                name: 'Kweebec'
            },
            locations: {
                selected: 1,
                options: [
                    {
                        continent: 'North America',
                        options: [
                            {
                                id: 1,
                                location: 'Miami, Florida',
                                flag: 'US',
                                online: true
                            },
                            {
                                id: 2,
                                location: 'New York City, New York',
                                flag: 'US',
                                online: false
                            },
                            {
                                id: 3,
                                location: 'Los Angeles, California',
                                flag: 'US',
                                online: true
                            },
                            {
                                id: 4,
                                location: 'Montreal, Quebec',
                                flag: 'CA',
                                online: false
                            }
                        ]
                    },
                    {
                        continent: 'Europe',
                        options: [
                            {
                                id: 5,
                                location: 'London, England',
                                flag: 'GB',
                                online: true
                            },
                            {
                                id: 6,
                                location: 'Paris, France',
                                flag: 'FR',
                                online: true
                            },
                            {
                                id: 7,
                                location: 'Helsinki, Finland',
                                flag: 'FI',
                                online: false
                            }
                        ]
                    },
                    {
                        continent: 'Oceania',
                        options: [
                            {
                                id: 8,
                                location: 'Sydney, Australia',
                                flag: 'AU',
                                online: true
                            },
                            {
                                id: 9,
                                location: 'Singapore',
                                flag: 'SG',
                                online: false
                            }
                        ]
                    }
                ]
            }
        }
    }

    handleProgressClick = (e) => {
        let section = e.target.closest('.checkout__progress-box').dataset.section;
        this.setState({
            section
        })
    }

    resetCheckout = () => {
        this.setState({section: 'plan'})
    }

    nextSection = () => {
        let index = this.state.sections.findIndex(cur => cur.section === this.state.section);
        let newSection = 0;
        if(index !== this.state.section.length || index !== 0) {
            newSection = this.state.sections[index + 1].section;
            this.setState({
                section: newSection
            })
        }
    }

    prevSection = () => {
        let index = this.state.sections.findIndex(cur => cur.section === this.state.section);
        let newSection = 0;
        if(index !== this.state.section.length || index !== 0) {
            newSection = this.state.sections[index - 1].section;
            this.setState({
                section: newSection
            })
        }
    }

    handleAvatarSwitch = e => {
        this.setState({
            plan: {
                name: e.target.dataset.plan
            }
        })
    }

    switchLocation = (id) => {
        let stateCopy = this.state.locations;
        stateCopy.selected = id;
        this.setState({
            locations: stateCopy
        })
    }



    renderSwitch = (param) => {
        switch(param) {
            case 'plan':
                return <Plan handleAvatarSwitch={this.handleAvatarSwitch} />;
            case 'location':
                return <Location locations={this.state.locations} switchLocation={this.switchLocation} />
            case 'verification':
                return <Verification />;
            case 'configuration':
                return <Configuration />; 
            case 'bonus-perks':
                    return <BonusPerks />; 
            default:
                return <h1>error</h1>;
        }
    }
      
    render() { 
        return (
            <div className="checkout">
                <CheckoutProgress
                    sections={this.state.sections}
                    handleProgressClick={this.handleProgressClick}
                    section={this.state.section} />
                <div className="checkout__main">
                    <div className="checkout__container">
                        <div className="checkout__preview">
                            <button className="checkbox__preview-button btn" onClick={this.resetCheckout}>Reset Plan</button>
                            <ul className="avatars avatars--small">
                                <li className="avatars__item avatars__item--no-hover">
                                    <img src={`/avatars/${this.state.plan.name.toLowerCase()}.png`} alt="Kweebec package" className="avatars__image"/>
                                    <div className="avatars__info">
                                        <h3 className="avatars__name">{this.state.plan.name}</h3>
                                        <h5 className="avatars__price"><span className="u-color-primary">$1.99</span>/ Month</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={`checkout__section checkout__${this.state.section}`}>
                            <div className="checkout__content">
                                {this.renderSwitch(this.state.section)}
                            </div>
                            <div className="checkout__lower">
                                {this.state.section !== 'plan'
                                    ? <button onClick={this.prevSection} className="checkout__section-button checkout__section-button--back btn btn--red">Back</button>
                                    : null}
                                {this.state.section !== 'bonus-perks'
                                    ? <button onClick={this.nextSection} className="checkout__section-button checkout__section-button--continue btn btn--green">Continue</button>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Checkout;