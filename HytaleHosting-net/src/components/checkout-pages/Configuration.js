import React, { Component } from 'react';

class Configuration extends Component {
    render() { 
        return (
            <div className="checkout__section checkout__location">
                <h1 className="checkout__title">Server Plan <span className="u-color-primary">Configuration</span></h1>
                <p className="checkout__subtitle">Customize your plan however you like!</p>
            </div>
        );
    }
}
 
export default Configuration;