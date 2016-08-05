export const SEARCH_INPUT = 'SEARCH_INPUT'
export const SAVE_CONTACT = 'SAVE_CONTACT'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function openModal() {
  return {
    type: OPEN_MODAL
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function searchInput(searchInput) {
  return {
    type: SEARCH_INPUT,
    searchInput
  }
}

export function saveContactToStore(fname, lname, dob, phone, email, notes) {
  return {
    type: SAVE_CONTACT,
    fname, lname, dob, phone, email, notes
  }
}
