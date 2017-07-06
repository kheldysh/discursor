import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({nick, ISOTime, text}) => (
  <div>
    <div>{ISOTime}</div>
    <div>{nick}</div>
    <div>{text}</div>
  </div>
)

Comment.propTypes = {
  nick: PropTypes.string.isRequired,
  ISOTime: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
