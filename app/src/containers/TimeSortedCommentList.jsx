import { connect } from 'react-redux'
import CommentList from '../components/CommentList'

const getTimeSortedComments = comments => {
  console.log(comments)
  console.log(comments.first())
  return comments.sortBy(comment => comment.get('ISOTime'))
}

const mapStateToProps = state => {
  return {
    comments: getTimeSortedComments(state.get('comments'))
  }
}

const TimeSortedCommentList = connect(
  mapStateToProps,
  null
)(CommentList)

export default TimeSortedCommentList
