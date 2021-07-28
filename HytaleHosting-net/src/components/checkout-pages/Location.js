import { roundToNearestMinutesWithOptions } from 'date-fns/fp';
import React, { Component } from 'react';

import ReactCountryFlag from "react-country-flag"

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommended: 3,
            selected: this.props.locations.selected,
            locations: this.props.locations.options
        }
    }

    handleLocationClick = e => {
        let button = e.target.closest('.checkout__location-option-button');
        let id = parseInt(button.dataset.locationId);
        if(button) {
            this.setState({
                selected: id
            })

            this.props.switchLocation(id)
        }
    }
    render() {
        let selectedLocation = {};
        this.state.locations.forEach(cur => {
            let findObj = cur.options.find(location => location.id === this.state.selected);
            if(findObj) selectedLocation = findObj
        })
        return (
            <>
                <h1 className="checkout__title">Server <span className="u-color-primary">Location</span></h1>
                <p className="checkout__subtitle">Choose your preferred Data Center!</p>
                <div className="checkout__location-header">
                    <div className="checkout__location-header-row checkout__location-row--recommended">
                        <h5 className="checkout__location-header-title">Recommended Location:</h5>
                        <ReactCountryFlag countryCode="US" svg className="checkout__location-header-flag" />
                        <span className="checkout__location-header-location checkout__location-header-location--online">Los Angeles, California</span>
                    </div>
                    <div className="checkout__location-header-row checkout__location-header-row--recommended">
                        <h5 className="checkout__location-header-title">Selected Location:</h5>
                        <ReactCountryFlag countryCode={selectedLocation.flag} svg className="checkout__location-header-flag" />
                        <span className={`checkout__location-header-location${selectedLocation.online ? ' checkout__location-header-location--online' : ' checkout__location-header-location--offline'}`}>{selectedLocation.location}</span>
                    </div>
                </div>
                <div className="checkout__location-option-container">
                    {this.state.locations.map(cur => (
                        <div className="checkout__location-option">
                            <h4 className="checkout__location-option-title">{cur.continent}</h4>
                            <ul className="checkout__location-option-list">
                                {cur.options.map(option => (
                                    <li className="checkout__location-option-item">
                                        <button
                                            className={`checkout__location-option-button${this.state.selected === option.id ? ' checkout__location-option-button--selected' : ''}`}
                                            data-location-id={option.id}
                                            onClick={this.handleLocationClick}>
                                            <ReactCountryFlag countryCode={option.flag} svg className="checkout__location-option-flag" />
                                            <span className="checkout__location-option-text">{option.location}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}
 
export default Location;