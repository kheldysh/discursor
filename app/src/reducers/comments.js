import Immutable from 'immutable'
import { ADD_COMMENT } from '../actions'

const initialState = Immutable.List()

export default function comments(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case ADD_COMMENT:
      return state.push(action.comment)
    default:
      return state
  }
}
