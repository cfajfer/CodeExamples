import React, { Component } from 'react';

class Verification extends Component {
    render() { 
        return (
            <>
                <h1 className="checkout__title">Hytale Account <span className="u-color-primary">Verification</span></h1>
                <p className="checkout__subtitle">Confirm your Hytale identity.</p>
                <div className="checkout__verification-container">
                    <h5 className="checkout__verification-text">Please input your hytale username below.</h5>
                    <div className="form__input-container">
                        <input type="text" className="form__button-input" placeholder="Enter Your Email Address..." />
                        <button className="form__inside-button btn btn--green">Confirm</button>
                    </div>
                </div>
                <div className="checkout__verification-account">
                    
                </div>
            </>
        );
    }
}
 
export default Verification;