import React, { Component } from 'react';

import CheckoutProgressItem from './CheckoutProgressItem';

class CheckoutProgress extends Component {
    handleProgressClick = (e) => {
        this.props.handleProgressClick(e);
    }
    render() {
        return (
            <div className="checkout__progress-container">
                {this.props.sections.map((cur, i) => (
                    <>
                        <CheckoutProgressItem
                        handleProgressClick={this.handleProgressClick}
                        section={cur.section}
                        label={cur.label}
                        active={this.props.section === cur.section}
                        completed={this.props.sections.findIndex(ind => ind.section === this.props.section) > -1 && this.props.sections.findIndex(ind => ind.section === this.props.section) > i}
                        number={i + 1} />
                        {i < this.props.sections.length - 1
                            ? <span className="checkout__progress-line"></span>
                            : null}
                    </>
                ))}
            </div>
        );
    }
}
 
export default CheckoutProgress;