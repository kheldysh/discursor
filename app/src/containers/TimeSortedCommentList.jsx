import { connect } from 'react-redux'
import CommentList from '../components/CommentList'

const getTimeSortedComments = comments => {
  return comments.sortBy(comment => comment.get('ISOTime'))
}

const mapStateToProps = state => {
  return {
    comments: getTimeSortedComments(state.get('comments'))
  }
}

const TimeSortedCommentList = connect(
  mapStateToProps
)(CommentList)

export default TimeSortedCommentList
