import { combineReducers } from 'redux'
import {
  SEARCH_INPUT
} from './actions'

function contacts(state = { searchInput: '' }, action) {
  switch (action.type) {
    case SEARCH_INPUT:
      return Object.assign({}, state, {
        searchInput: action.searchInput
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  contacts
})

export default rootReducer
