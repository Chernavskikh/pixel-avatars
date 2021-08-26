import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import avatars from './avatars'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  // rest of your reducers
  avatars,
})
export default createRootReducer
