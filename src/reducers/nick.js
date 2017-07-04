import { fromJS } from 'immutable'
import { SELECT_NICK } from '../actions'

const initialState = fromJS({ nick: ''})

export default function nick(state = initialState, action) {
  switch (action.type) {
    case SELECT_NICK:
      return fromJS({
        nick: action.nick
      })
    default:
      return state
  }
}
