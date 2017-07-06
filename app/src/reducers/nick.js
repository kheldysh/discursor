import { CHOOSE_NICK } from '../actions/nick'

const nick = (state = '', action) => {
  switch (action.type) {
    case CHOOSE_NICK:
      return action.nick
    default:
      return state
  }
}

export default nick
