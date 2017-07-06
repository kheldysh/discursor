export const CHOOSE_NICK = 'CHOOSE_NICK'

const setNick = (nick) => {
  return { type: CHOOSE_NICK, nick }
}

export { setNick }
