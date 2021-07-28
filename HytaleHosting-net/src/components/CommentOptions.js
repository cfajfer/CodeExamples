import ReplyForm from './ReplyForm';
import CommentLikeButton from './CommentLikeButton';
import SpeechBubble from '../assets/speech-bubble.svg';

const CommentOptions = (props) => {
    return (
        <>
            <div className="comments__options">
                <CommentLikeButton 
                    button={props.likeIsButton}
                    active={props.userLikes}
                    points={props.points} 
                    handleLikeClick={props.handleLikeClick} />
                
                <button className="comments__options-button comments__options-button--reply" onClick={props.toggleReplyForm}>
                    <SpeechBubble className="comments__options-icon" />
                    <span className="comments__option-text">{props.formActive ? 'Dismiss' : 'Reply'}</span>
                </button>
            </div>
            <ReplyForm 
                active={props.formActive} 
                showDismiss={true}
                addComment={props.addComment}
                parentID={props.parentID}
                toggleReplyForm={props.toggleReplyForm}
                commentID={props.commentID} />
        </>
    );
}
 
export default CommentOptions;