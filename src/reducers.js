import { combineReducers } from 'redux'
import {
  SEARCH_INPUT,
  OPEN_MODAL
} from './actions'

const initialState = {
  searchInput: '',
  contacts: [],
  modalOpen: false
}

function contacts(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INPUT:
      return Object.assign({}, state, {
        searchInput: action.searchInput
      })
    case OPEN_MODAL:
      if (state.modalOpen == true) {
        return { ...state, modalOpen: false }
      } else {
        return { ...state, modalOpen: true }
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  contacts
})

export default rootReducer
