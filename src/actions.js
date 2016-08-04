export const SEARCH_INPUT = 'SEARCH_INPUT'
// export const ADD_CONTACT = 'ADD_CONTACT'
export const OPEN_MODAL = 'OPEN_MODAL'

export function searchInput(searchInput) {
  return {
    type: SEARCH_INPUT,
    searchInput
  }
}

export function openModal() {
  return {
    type: OPEN_MODAL
  }
}
