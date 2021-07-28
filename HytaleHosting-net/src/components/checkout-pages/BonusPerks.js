import React, { Component } from 'react';

class BonusPerks extends Component {
    render() { 
        return (
            <div className="checkout__section checkout__location">
                <h1 className="checkout__title">Choose extra <span className="u-color-primary">Bonus Perks</span></h1>
                <p className="checkout__subtitle">Add extra specs to your server.</p>
            </div>
        );
    }
}
 
export default BonusPerks;