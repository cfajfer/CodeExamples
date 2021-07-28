import React, { Component } from 'react';

import Avatars from '../Avatars';

class Plan extends Component {
    render() {
        return (
            <>
                <h1 className="checkout__title">Select a <span className="u-color-primary">Plan</span></h1>
                <p className="checkout__subtitle">Choose from a variety of hosting plans.</p>
                <Avatars
                    small={true}
                    animation={false}
                    handleAvatarSwitch={this.props.handleAvatarSwitch} />
            </>
        );
    }
}
 
export default Plan;