import { combineReducers } from 'redux'
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

function contacts(state = contactsInit, action) {
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

const contactsInit = [
  {firstName: 'Nadav', lastName: 'Lachish', bod: '', phone:'0506803382', email: 'd_lahish@www.www', notes: 'well well'},
  {firstName: 'Elad', lastName: 'Gellert', bod: '', phone:'123455', email: '', note: ''},
  {firstName: 'Jenny', lastName: 'Soffel', bod: '', phone:'8787878787', email: 'jenny@gmail.com', note: ''},
  {firstName: 'Yoni', lastName: 'Smile', bod: '', phone:'456', email: '', note: ''},
  {firstName: 'Naama', lastName: 'Kehaa', bod: '', phone:'', email: '', notes: ''},
  {firstName: 'Eldad', lastName: 'Larman', bod: '', phone:'', email: '', notes: ''},
  {firstName: 'Elia', lastName: 'Geller', bod: '', phone:'', email: '', notes: ''}
]

export default combineReducers({
  contacts,
  search,
  modal
})
