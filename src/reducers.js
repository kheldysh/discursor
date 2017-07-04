import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import { createStore } from 'redux'
import { CHOOSE_NICK } from './actions'
import nick from './reducers/nick'

const initialState = Immutable.Map({
  nick: ''
})

export const rootReducer = combineReducers({
  nick
})

export default rootReducer
