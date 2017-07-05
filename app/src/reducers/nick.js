import { fromJS } from 'immutable'
import { CHOOSE_NICK } from '../actions'

const initialState = fromJS({ nick: ''})

export default function nick(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_NICK:
      return fromJS({
        nick: action.nick
      })
    default:
      return state
  }
}
