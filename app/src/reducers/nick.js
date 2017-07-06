import { Map } from 'immutable'
import { CHOOSE_NICK } from '../actions'

const nick = (state = Map({nick: ''}), action) => {
  switch (action.type) {
    case CHOOSE_NICK:
      return Map({
        nick: action.nick
      })
    default:
      return state
  }
}

export default nick
