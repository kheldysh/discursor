import { send } from './webSocket'

export const ADD_COMMENT = 'ADD_COMMENT'

const addLocalComment = (nick, text) => {
  const action = { type: ADD_COMMENT,
    comment: {
      nick: nick,
      ISOTime: new Date().toISOString(),
      text: text
    }
  }
  send(action)
  return action
}

const addComment = (nick, ISOTime, text) => {
  return { type: ADD_COMMENT,
    comment: {
      nick: nick,
      ISOTime: ISOTime,
      text: text
    }
  }
}

export { addLocalComment, addComment }
