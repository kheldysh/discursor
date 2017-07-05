import { combineReducers } from 'redux-immutable'
import nick from './reducers/nick'
import comments from './reducers/comments'

export const rootReducer = combineReducers({
  nick,
  comments
})

export default rootReducer
