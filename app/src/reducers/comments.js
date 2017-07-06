import { List } from 'immutable'
import { ADD_COMMENT } from '../actions'

const comments = (state = List(), action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return state.push(action.comment)
    default:
      return state
  }
}

export default comments
