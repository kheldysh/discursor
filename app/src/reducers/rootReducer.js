import { combineReducers } from 'redux-immutable'
import nick from './nick'
import comments from './comments'

export const rootReducer = combineReducers({
  nick,
  comments
})

export default rootReducer
