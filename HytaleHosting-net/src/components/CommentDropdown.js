import React, { Component } from 'react';
import Link from 'next/link';

class CommentDropdown extends Component {
    render() { 
        return (
            <div className={`comments__dropdown ${this.props.active ? 'comments__dropdown--active' : ''}`}>
                <ul className="comments__dropdown-list normalize-list">
                    <li className="comments__dropdown-item">
                        <button onClick={this.props.handleReportClick} className="comments__dropdown-button">Report Comment</button>
                    </li>
                    <li className="comments__dropdown-item">
                        <Link href={this.props.profileLink}>
                            <a className="comments__dropdown-button">User Profile</a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default CommentDropdown;