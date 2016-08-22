import { combineReducers } from 'redux'
import data from './data.json'
import {
  SEARCH_INPUT,
  SAVE_CONTACT,
  OPEN_MODAL,
  CLOSE_MODAL
} from './actions'

function modal(state = false, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return true
    case CLOSE_MODAL:
      return false
    default:
      return state
  }
}

function search(state = '', action) {
  switch (action.type) {
    case SEARCH_INPUT:
      return state = action.searchInput
    default:
      return state
  }
}

function contacts(state = data, action) {
  switch (action.type) {
    case SAVE_CONTACT:
      let newContact = {
        firstName: action.firstName,
        lastName: action.lastName,
        dateOfBirth: action.dateOfBirth,
        phone: action.phone,
        email: action.email,
        notes: action.notes
      }
      return [ ...state, newContact ]
    default:
      return state
  }
}

export default combineReducers({
  contacts,
  search,
  modal
})
