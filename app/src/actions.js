import Immutable from 'immutable'

export const CHOOSE_NICK = 'ADD_TODO'
export const ADD_COMMENT = 'ADD_COMMENT'

/*
 * action creators
 */

export function setNick(nick) {
  return { type: CHOOSE_NICK, nick }
}

export function addLocalComment(nick, text) {
  return { type: ADD_COMMENT,
    comment: Immutable.Map({
      nick: nick, // figure out how to pass own nick here
      ISOTime: new Date().toISOString(),
      text: text
    })
  }
}

export function addComment(nick, ISOTime, text) {
  return { type: ADD_COMMENT,
    comment: Immutable.Map({
      nick: nick,
      ISOTime: ISOTime,
      text: text
    })
  }
}
