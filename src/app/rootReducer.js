import { combineReducers } from 'redux-immutable'
import nick from './reducers/nick'

export const rootReducer = combineReducers({
  nick
})

export default rootReducer
