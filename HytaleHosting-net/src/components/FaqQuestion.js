import { isThisISOWeek } from 'date-fns';
import React, { Component } from 'react';

import AddIcon from '../assets/add.svg';

class FaqQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    toggle = () => {
        this.setState({active: !this.state.active})
    }
    render() { 
        return (
            <li className={`about-us__faq-item${this.state.active ? ' about-us__faq-item--active' : ''}`}>
                <button className="about-us__faq-button" onClick={this.toggle}>
                    <h3 className="about-us__faq-button-text">{this.props.question}</h3>
                    <div className="about-us__faq-button-icon"></div>
                </button>
                <div className="about-us__faq-answer">
                    {this.props.answer}
                </div>
            </li>
        );
    }
}
 
export default FaqQuestion;