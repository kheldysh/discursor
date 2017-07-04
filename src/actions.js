export const CHOOSE_NICK = 'ADD_TODO'

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
