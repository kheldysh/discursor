export const SELECT_NICK = 'ADD_TODO'

/*
 * other constants
 */

export const SomeConstants = {
}

/*
 * action creators
 */

export function setNick(nick) {
  return { type: SELECT_NICK, nick }
}
