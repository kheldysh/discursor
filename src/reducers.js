import * as Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'
import { createStore } from 'redux'
import { CHOOSE_NICK } from './actions'
import nick from './reducers/nick'

const initialState = Immutable.fromJs({
  nick: ''
})

const rootReducer = combineReducers({
  nick
})
