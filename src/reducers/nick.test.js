import { fromJS } from 'immutable'
import nickReducer from './nick'
import { CHOOSE_NICK } from '../actions'

describe('nick reducer', () => {
  it('returns empty string as initial state', () => {
    expect(nickReducer(undefined, {})).toEqual(
      fromJS({
        nick: ''
      })
    )
  })

  it('sets nick upon CHOOSE_NICK', () => {
    expect(nickReducer(undefined, {type: CHOOSE_NICK, nick: 'kazoo'})).toEqual(
      fromJS({
        nick: 'kazoo'
      })
    )
  })
})
