import Immutable from 'immutable'

export const ADD_COMMENT = 'ADD_COMMENT'

const addLocalComment = (nick, text) => {
  return { type: ADD_COMMENT,
    comment: Immutable.Map({
      nick: nick,
      ISOTime: new Date().toISOString(),
      text: text
    })
  }
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
