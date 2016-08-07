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
        fname: action.fname,
        lname: action.lname,
        dob: action.dob,
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
  {fname: 'Nadav', lname: 'Lachish', bod: '', phone:'0506803382', email: 'd_lahish@www.www', notes: 'well well'},
  {fname: 'Elad', lname: 'Gellert', bod: '', phone:'123455', email: '', note: ''},
  {fname: 'Jenny', lname: 'Soffel', bod: '', phone:'8787878787', email: 'jenny@gmail.com', note: ''},
  {fname: 'Yoni', lname: 'Smile', bod: '', phone:'456', email: '', note: ''},
  {fname: 'Naama', lname: 'Kehaa', bod: '', phone:'', email: '', notes: ''},
  {fname: 'Eldad', lname: 'Larman', bod: '', phone:'', email: '', notes: ''},
  {fname: 'Elia', lname: 'Geller', bod: '', phone:'', email: '', notes: ''}
]

const rootReducer = combineReducers({
  contacts,
  search,
  modal
})

export default rootReducer
