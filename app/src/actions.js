import Immutable from 'immutable'

export const CHOOSE_NICK = 'ADD_TODO'
export const ADD_COMMENT = 'ADD_COMMENT'

/*
 * other constants
 */

export const SomeConstants = {
}

/*
 * action creators
 */

export function setNick(nick) {
  return { type: CHOOSE_NICK, nick }
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
