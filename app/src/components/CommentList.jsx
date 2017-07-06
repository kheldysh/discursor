import React from 'react'
import IPropTypes from 'immutable-props'
import Comment from './Comment'
import '../styles/CommentList.css'

const CommentList = ({comments, index}) => (
  <div className="comment-list">
  {comments.map((comment) => (
    <Comment key={index} {...comment} />
  ))}
  </div>
)

CommentList.propTypes = {
  comments: IPropTypes.List.isRequired
}

export default CommentList
