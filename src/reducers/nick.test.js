import { fromJS } from 'immutable'
import nickReducer from './nick'
import { SELECT_NICK } from '../actions'

describe('nick reducer', () => {
  it('returns empty string as initial state', () => {
    expect(nickReducer(undefined, {})).toEqual(
      fromJS({
        nick: ''
      })
    )
  })

  it('sets nick upon SELECT_NICK', () => {
    expect(nickReducer(undefined, {type: SELECT_NICK, nick: 'kazoo'})).toEqual(
      fromJS({
        nick: 'kazoo'
      })
    )
  })
})
