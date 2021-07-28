import React, { Component } from 'react';

import Link from 'next/link';
import { strapiQuery } from '../utils/strapiQuery';

import ReplyForm from './ReplyForm';
import Comment from './Comment';
import Modal from './Modal';

import Select from 'react-select';

// cookie dependancies
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Comments extends Component {
    
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            comments: this.props.comments,
            newestCommentID: null,
            jwt: cookies.get('jwt') || null,
            userLikes: [],
            dropdownOpen: null,
            authenticated: false,
            // for report modal contents
            modal: {
                active: false,
                commentData: null,
                reportSelectValue: null,
                formState: {
                    submitted: false,
                    msg: null
                }
            }
        }
    }

    async componentDidMount() {
        this.updateUserLikes();
        // fetch comments again from the client to replace static regeneration delay
        this.updateComments();

        document.addEventListener('click', this.handleWindowClick);
    }

    updateComments = async () => {
        let response = await strapiQuery(`/comments/blog:${this.props.articleID}/flat`);
        if(!response.error) {
            this.setState({
                comments: response.data
            });
        }
    }

    handleDropdownClick = (id) => {
        let newID = id === this.state.dropdownOpen ? null : id;

        this.setState({
            dropdownOpen: newID
        });
    }
    
    handleWindowClick = (e) => {
        if(!this.state.dropdownOpen) return;
        if(!e.target.closest('.comments__dropdown--active') && !e.target.closest('.comments__comment-button')) {
            this.handleDropdownClick(null);
        }
    }

    updateUserLikes = async () => {
        // get array of all users liked comments
        let response = await strapiQuery(`/likes/${this.props.articleID}`, this.state.jwt);
        if(!response.error) {
            this.setState({
                userLikes: response.data,
                authenticated: true
            });
        }
    }

    addComment = async (content, parentID, commentID) => {
        let obj = { content, threadOf: parentID}

        let response = await strapiQuery(`/comment/hytalehosting/${this.props.articleSlug}`, this.state.jwt, 'post', obj);

        if(response.error) {
            return {
                error: true,
                msg: response.msg
            };
        } 

        if(response.data.threadOf !== null) {
            response.data.threadOf = parentID;
        } 

        // if reply, put at end, if comment, put at start
        let newComments = parentID ? [...this.state.comments, response.data] : [response.data, ...this.state.comments]
        
        this.setState({
            comments: newComments,
            newestCommentID: response.data.id
        });
        return {
            error: false
        };
    }

    likeComment = async (id) => {
        let url = `/comments/blog:${this.props.articleID}/comment/${id}/like`;
        let response = await strapiQuery(url, this.state.jwt, 'patch');
        
        if(response.error) {
            return {
                error: true,
                msg: 'Response failed'
            };
        }

        this.updateUserLikes();

        return {
            error: false,
            data: response.data.points
        };
    }

    openReportModal = (data) => {
        this.setState({
            modal: {
                active: true,
                commentData: data,
                reportSelectValue: null,
                formState: {
                    submitted: false,
                    msg: null
                }
            }
        })
    }

    closeModal = () => {
        // only change active state so content doesnt go before animation
        let stateCopy = this.state.modal;
        stateCopy.active = false;
        this.setState({
            modal: stateCopy
        });
    }

    handleSelectChange = (obj) => {
        let stateCopy = this.state.modal;
        stateCopy.reportSelectValue = obj.value;
        this.setState({
            modal: stateCopy
        })
    }

    handleReportSubmit = async (e) => {
        e.preventDefault();
        let formElements = e.target.elements;
        let reason = this.state.modal.reportSelectValue;
        let content = formElements[1].value;

        if(!reason) {
            this.modalError('Please select a reason.');
            return false;
        }
        

        let obj = { reason, content }

        let response = await strapiQuery(`/comments/blog:${this.props.articleID}/comment/${this.state.modal.commentData.id}/report-abuse`, null, 'post', obj);

        if(response.error) {
            this.modalError(response.msg);
            return false;
        }

        let stateCopy = this.state.modal;
        stateCopy.formState.submitted = true;
        this.setState({
            modal: stateCopy
        })
    }

    modalError = (msg) => {
        let stateCopy = this.state.modal;

        stateCopy.formState = {
            submitted: false,
            msg
        }

        this.setState({
            modal: stateCopy
        })
    }

    
    render() {
        // work out the amount of comments + replies
        let rootComments = this.state.comments.filter(cur => {
            return cur.threadOf === null
        });

        let replies = this.state.comments.filter(cur => {
            return cur.threadOf !== null && !cur.blocked && !cur.blockedThread
        });



        const reportReasons = [
            { value: 'BAD_LANGUAGE', label: 'Bad Language' },
            { value: 'DISCRIMINATION', label: 'Discrimination' },
            { value: 'SELF_ADVERTISEMENT', label: 'Self Advertisement' },
            { value: 'HARASSMENT', label: 'Self Harassment' },
            { value: 'FALSE_INFORMATION', label: 'False Information' },
            { value: 'OTHER', label: 'Other' }
        ];

        return ( 
            <div className="comments info-card">
                <Modal
                    active={this.state.modal.active}
                    size={{width: '50rem', height: '20rem'}}
                    centerContent={true}
                    title={this.state.modal.formState.submitted
                            ? <>Form Submitted</>
                            : (
                                <>
                                    <span>Report Comment from </span> 
                                    <Link href="/user/elliot">
                                        <a className="markdown__link">
                                            {this.state.modal.commentData ? this.state.modal.commentData.authorUser.username : ''}
                                        </a>
                                    </Link>
                                </>
                            )}
                    closeModal={this.closeModal}>
                    {this.state.modal.formState.submitted === false
                        ? (
                            <form onSubmit={this.handleReportSubmit} className="modal__form form">
                                <label className="form__label">Report Reason (required)</label>
                                <div className="form__element form__element--100">
                                    <Select
                                        options={reportReasons}
                                        classNamePrefix="form-select"
                                        onChange={this.handleSelectChange} />
                                </div>
                                <div className="form__element form__element--100">
                                    <textarea
                                        placeholder="What was wrong with the comment?"
                                        className="form__textarea" name="report-reason"
                                        id="report-reason"
                                        rows="5" />
                                    <label className="form__label" style={{textAlign: 'left'}}>Report Reason (required)</label>
                                </div>
                                <div className="form__element form__element--100 u-remove-margin">
                                    {this.state.modal.formState.msg
                                        ? <p className="form__error">{this.state.modal.formState.msg}</p>
                                        : null}
                                    <button className="form__submit-button btn btn--block btn--fill u-margin-top-gutter">Submit Report</button>
                                </div>
                            </form>
                        )
                        : (
                            <div className="form__element form__element--center">
                                <p className="form__success u-margin-top-gutter">Your report has been submitted, thank you!</p>
                                <button onClick={this.closeModal} className="btn btn--fill">Close Modal</button>
                            </div>
                        )}
                </Modal>
                <div className="comments__header">
                    <h3 className="comments__title">Comments ({this.state.comments.length})</h3>
                    {this.state.authenticated
                        ? (
                            <div className="comments__header-form">
                                <div className="comments__comment-image-container">
                                    <img className="comments__comment-image" src="https://i.imgur.com/a9Qr2JI.png" />
                                </div>
                                <ReplyForm
                                    active={true}
                                    addComment={this.addComment}
                                    showDismiss={false}
                                    commentAdditionState={this.state.commentAdditionState} />
                            </div>
                        ) : null}
                </div>
                <div className="comments__container">
                    {!rootComments.length && !this.state.authenticated
                        ? (
                            <p class="comments__error">
                                There are no comments to be displayed. <Link href="/"><a className="markdown__link">Log in</a></Link> to start the discussion!
                            </p>
                        )
                        : null}
                    {rootComments.map(cur => {
                        let commentReplies = [];

                        // loop through REPLIES, if the parent thread is equal to THIS COMMENT, add to replies array to send as prop
                        replies.forEach(comment => {
                            if(comment.threadOf === cur.id) {
                                commentReplies.push(comment);
                            }
                        });

                        return (
                            <div className="comments__comment-outer">
                                <Comment
                                    key={cur.id}
                                    data={cur}
                                    authenticated={this.state.authenticated}
                                    replies={commentReplies}
                                    addComment={this.addComment}
                                    likeComment={this.likeComment}
                                    newestCommentID={this.state.newestCommentID}
                                    userLikes={this.state.userLikes}
                                    dropdownOpen={this.state.dropdownOpen}
                                    handleDropdownClick={this.handleDropdownClick}
                                    openReportModal={this.openReportModal}
                                    points={cur.points} />
                            </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default withCookies(Comments);