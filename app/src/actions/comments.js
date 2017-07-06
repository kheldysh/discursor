import Immutable from 'immutable'
import { send } from './webSocket'

export const ADD_COMMENT = 'ADD_COMMENT'

const addLocalComment = (nick, text) => {
  const action = { type: ADD_COMMENT,
    comment: Immutable.Map({
      nick: nick,
      ISOTime: new Date().toISOString(),
      text: text
    })
  }
  send(JSON.stringify(action))
  return action
}

const addComment = (nick, ISOTime, text) => {
  return { type: ADD_COMMENT,
    comment: Immutable.Map({
      nick: nick,
      ISOTime: ISOTime,
      text: text
    })
  }
}

export { addLocalComment, addComment }
