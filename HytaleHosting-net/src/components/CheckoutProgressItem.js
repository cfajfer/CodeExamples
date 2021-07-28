import React, { Component } from 'react';

import Tick from '../assets/tick.svg';


class CheckoutProgressItem extends Component {
    render() {
        return (
            <button
                className={`checkout__progress-box${this.props.completed ? ' checkout__progress-box--completed' : ''}${this.props.active ? ' checkout__progress-box--active' : ''}`}
                data-section={this.props.section}
                onClick={this.props.handleProgressClick}>

                <div className="checkout__progress-box-container">
                    {this.props.completed
                        ? <Tick className="checkout__progress-icon" />
                        : <span className="checkout__progress-number">{this.props.number}</span>}
                </div>
                <span className="checkout__progress-label">{this.props.label}</span>

            </button>
        );
    }
}
 
export default CheckoutProgressItem;