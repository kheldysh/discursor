import React from 'react'
import IPropTypes from 'immutable-props'
import Comment from './Comment'

const CommentList = ({comments}) => (
  <ul>
  {comments.map((comment, index) => (
      <li key={index}>
        <Comment comment={comment} />
      </li>
    )
  )}
  </ul>
)

CommentList.propTypes = {
  comments: IPropTypes.List.isRequired
}

export default CommentList
