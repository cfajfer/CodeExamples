import React, { Component } from 'react';

class FormElement extends Component {
    render() { 
        return (
            <div className={`form__element${this.props.required ? ' form__element--required' : ''} ${this.props.size ? `form__element--${this.props.size}` : 'form__element--100'}`}>
                {this.props.type === 'textarea'
                    ? <textarea type="text" className="form__textarea" name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.handleChange()}/>
                    : <input type="text" className="form__input" name={this.props.name} placeholder={this.props.placeholder} />}
                <label htmlFor={this.props.id} className="form__label">{this.props.label}</label>
            </div>
        );
    }
}
 
export default FormElement;