import React from 'react'
import TimeSortedCommentList from '../containers/TimeSortedCommentList'
import AddComment from '../containers/AddComment'

const Chat = () => (
  <div>
    <TimeSortedCommentList />
    <AddComment />
  </div>
)

export default Chat
