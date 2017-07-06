import React from 'react'
import PropTypes from 'prop-types'

const presentableDate = (ISOTime) => {
  return new Date(ISOTime).toLocaleTimeString('en-US', { hour12: false })
}

const Comment = ({nick, ISOTime, text}) => (
  <div className="comment">
    <div className="comment-timestamp">{presentableDate(ISOTime)}</div>
    <div className="comment-nick">{nick}</div>
    <div className="comment-text">{text}</div>
  </div>
)

Comment.propTypes = {
  nick: PropTypes.string.isRequired,
  ISOTime: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
