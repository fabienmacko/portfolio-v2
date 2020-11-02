import React from 'react';
import './comment.scss';

const Comment = ({ name, jobTitle, company, comment }) => {

  return (
    <div className="testi">
      <div className="comment">
        <p>« {comment.trim()} »</p>
        <span>{name}, {jobTitle} at {company}</span>
      </div>
    </div>
  )
}

export default Comment;