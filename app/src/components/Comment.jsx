import React from 'react'
import IPropTypes from 'immutable-props'

const Comment = ({comment}) => (
  <div>
    <div>{comment.get('ISOTime')}</div>
    <div>{comment.get('nick')}</div>
    <div>{comment.get('text')}</div>
  </div>
)

Comment.propTypes = {
  comment: IPropTypes.Map.isRequired
}

export default Comment
