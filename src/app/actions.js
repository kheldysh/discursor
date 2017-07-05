export const CHOOSE_NICK = 'ADD_TODO'
export const SEND_MESSAGE = 'SEND_MESSAGE'

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

export function sendMessage(message) {
  return { type: SEND_MESSAGE, message }
}
