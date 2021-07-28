import React, { Component, createRef } from 'react';

import Info from '../assets/info.svg';

import { checkStringLength } from '../utils/checkStringLength';

class ReplyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active
        }
        
    }

    UNSAFE_componentWillMount () {
        this.commentInput = createRef();
        this.commentForm = createRef();
        this.inputError = createRef();
    }

    handleSubmitClick = () => {
        this.addComment()
    }

    addComment = async () => {

        let checkLength = checkStringLength(this.commentInput.current.value, 1, 1024);

        if(checkLength.err) {
            this.showMessage(checkLength.msg)
            return;
        };
        
        let response = await this.props.addComment(this.commentInput.current.value, this.props.parentID, this.props.commentID);
        this.clearInput();

        if(response.error) {
            this.showMessage(response.msg, false);
        } else {
            if(this.props.showDismiss) {
                this.props.toggleReplyForm();
            } else {
                this.showMessage("Comment posted!", true);
            }
        }

        // toggle form after submit if not top form (that cannot dismiss)
    }

    showMessage = (msg, success = false) => {

        if(success) {
            this.inputError.current.classList.add('comments__form-input-error--success');
        } else {
            this.inputError.current.classList.remove('comments__form-input-error--success');
        }

        this.inputError.current.classList.remove('comments__form-input-error--animate');
        void this.inputError.current.offsetWidth;
        this.inputError.current.classList.add('comments__form-input-error--animate');
        this.inputError.current.innerHTML = msg;
    }

    // submit if user presses enter in textarea
    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();

            this.addComment();
            this.clearInput();
        }
    }

    clearInput = () => this.commentInput.current.value = '';

    // focus input after active
    componentDidUpdate(newprops) {
        if(this.props.active && this.props.showDismiss) {
            setTimeout(() => {
                this.commentInput.current.focus();
            }, 100);
        }
    }

    render() {
        return (
            <div className={`comments__form ${this.props.active ? 'comments__form--active' : ''}`}>
                <div className="comments__form-input-container">
                    <textarea ref={this.commentInput} onKeyDown={this.onEnterPress} name="reply" className="comments__form-input" placeholder="Start a discussion.." />
                    <div className="comments__form-input-infobox">
                        <p ref={this.inputError} className="comments__form-input-error"></p>
                        <button className="comments__form-input-info-button">
                            <Info />
                        </button>
                    </div>
                </div>
                <div className="comments__form-button-container">
                    <button onClick={this.handleSubmitClick} className="comments__form-button btn btn--fill">Submit</button>
                    {this.props.showDismiss ? <button className="comments__form-button btn btn--no-fill btn--uppercase" onClick={this.props.toggleReplyForm}>Dismiss</button> : null}
                </div>
            </div>
        )
    }
}

export default ReplyForm;