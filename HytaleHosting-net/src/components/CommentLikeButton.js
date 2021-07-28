import React, { Component } from 'react';

import HeartOutline from '../assets/heart-outline.svg';
import HeartFill from '../assets/heart-fill.svg';

class CommentLikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            active: this.props.active,
            points: this.props.points
        }
    }

    toggleLike = async () => {
        if(this.state.loading === true) return;
        this.setState({
            loading: true
        });

        let response = await this.props.handleLikeClick();
        if(response.error) {
            this.setState({ loading: false })
            console.log(response.msg);
            return false;
        } else {
            this.setState({
                points: response.data,
                loading: false,
                active: !this.props.active
            })
        }

    }


    render() {
        if(this.props.button) {
            return (
                <button className="comments__options-button comments__options-button--like" onClick={this.toggleLike}>
                    {this.state.active
                        ? <HeartFill className="comments__options-icon" />
                        : <HeartOutline className="comments__options-icon" />}
                    <span className="comments__option-text">{this.state.points} {this.state.points === 1 ? 'like' : 'likes'}</span>
                    {this.state.loading ? <div className="spinner"><div className="bounce1"></div><div className="bounce2"></div><div className="bounce3"></div></div> : null}
                </button>
            );
        }

        return (
            <div className="comments__options-button comments__options-button--like comments__options-button--no-button">
                {this.state.active
                    ? <HeartFill className="comments__options-icon" />
                    : <HeartOutline className="comments__options-icon" />}
                <span className="comments__option-text">{this.state.points} {this.state.points === 1 ? 'like' : 'likes'}</span>
            </div>
        );
    }
}
 
export default CommentLikeButton;