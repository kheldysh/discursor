import React from 'react'
import PropTypes from 'prop-types'

const presentableDate = (ISOTime) => {
  return new Date(ISOTime).toLocaleTimeString('en-US', { hour12: false })
}

const Comment = ({nick, ISOTime, text}) => (
  <div className="comment">
    <span className="comment-timestamp">{presentableDate(ISOTime)}</span>
    <span className="comment-nick">{nick}</span>
    <span className="comment-text">{text}</span>
  </div>
)

Comment.propTypes = {
  nick: PropTypes.string.isRequired,
  ISOTime: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
