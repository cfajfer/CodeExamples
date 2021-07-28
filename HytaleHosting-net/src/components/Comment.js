import React, { Component } from 'react';

import CommentDropdown from './CommentDropdown';
import CommentOptions from './CommentOptions';
import CommentLikeButton from './CommentLikeButton';

import Link from 'next/link';

import Dots from '../assets/dots.svg';

import { strapiDate } from '../utils/strapiDate';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false, // stores whether the 3 dots button dropdown is open
            formActive: false, // stores if form is open
            data: this.props.data,
            userLikes: this.props.userLikes,
            points: this.props.points
        }
    }

    handleDropdownClick = () => {
        this.props.handleDropdownClick(this.state.data.id);
    }

    toggleReplyForm = () => {
        this.setState({formActive: !this.state.formActive})
    }

    handleLikeClick = async () => {
        return await this.props.likeComment(this.state.data.id);
    }

    handleReportClick = () => {
        this.props.openReportModal(this.state.data);
    }

    static getDerivedStateFromProps(newProps, prevState) {
        let obj = {};

        // update props
        if (newProps.userLikes !== prevState.userLikes) obj.userLikes = newProps.userLikes

        return obj;
    }

    render() {
        
        let repliesBlock;
        if(this.props.replies) {
            repliesBlock = (
                <div className="comments__replies">
                    {this.props.replies.map(cur => {
                        return (
                            <Comment
                                key={cur.id}
                                data={cur}
                                addComment={this.props.addComment}
                                likeComment={this.props.likeComment}
                                newestCommentID={this.props.newestCommentID}
                                parentID={this.props.data.id}
                                userLikes={this.state.userLikes}
                                points={cur.points}
                                dropdownOpen={this.props.dropdownOpen}
                                handleDropdownClick={this.props.handleDropdownClick}
                                authenticated={this.props.authenticated}
                                openReportModal={this.props.openReportModal}
                                commentID={cur.id} />
                        )
                    })}
                </div>
            )
        }

        let commentBlocked = false;
        let commentContent = this.state.data.content;
        let commentProfile = (
            <Link href="/">
                <a className="comments__comment-user">
                    {this.state.data.authorUser.username}
                </a>
            </Link>
        );
        let commentAvatar = 'https://i.imgur.com/a9Qr2JI.png';
        if(this.state.data.blocked === true || this.state.data.blockedThread === true) {
            commentBlocked = true;
            commentContent = <span className="comments__comment-text-error">[Comment Removed]</span>;
            commentProfile = 'Removed';
            commentAvatar = 'https://vignette.wikia.nocookie.net/hytale/images/7/70/CopperArmor.jpg/revision/latest?cb=20190515222250';
        }

        return (
            <div className={`comments__comment ${this.props.newestCommentID === this.state.data.id ? 'comments__comment--animate' : ''}`}>
                <div className="comments__comment-image-container">
                    <img className="comments__comment-image" src={commentAvatar} />
                </div>
                <div className="comments__comment-container">
                    <div className="comments__comment-info">
                        {commentProfile}
                        <span className="comments__comment-date">{strapiDate(this.state.data.created_at, true)} ago</span>
                        {!commentBlocked
                            ? (
                            <div className="comments__comment-buttons">
                                <button onClick={this.handleDropdownClick} className={`comments__comment-button ${this.state.dropdownOpen ? 'comments__comment-button--active' : ''}`}>
                                    <Dots className="comments__comment-icon" />
                                </button>
                                <CommentDropdown
                                    profileLink={`/profile/${this.state.data.authorUser.username}`}
                                    handleReportClick={this.handleReportClick}
                                    active={this.props.dropdownOpen === this.state.data.id}
                                    handleDropdownClick={this.handleDropdownClick} />
                            </div>
                            ) : null}
                    </div>
                    <div className="comments__comment-content">
                        <p className="comments__comment-text">{commentContent}</p>
                    </div>
                    {this.props.authenticated
                        ? <CommentOptions
                            userLikes={this.state.userLikes.includes(this.state.data.id)}
                            points={this.state.points}
                            handleLikeClick={this.handleLikeClick}
                            likeIsButton={true}

                            formActive={this.state.formActive}
                            addComment={this.props.addComment}
                            parentID={this.props.data.threadOf === null ? this.state.data.id : this.props.parentID}
                            toggleReplyForm={this.toggleReplyForm}
                            commentID={this.props.commentID} />
                        : (
                            <div className="comments__options">
                                <CommentLikeButton 
                                    active={false}
                                    points={this.props.points} 
                                    handleLikeClick={this.props.handleLikeClick}
                                    button={false} />
                            </div>
                        )}
                </div>
                {repliesBlock}
            </div>
         );
    }
}

export default Comment;