export const SEARCH_INPUT = 'SEARCH_INPUT'
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT'

export function searchInput(searchInput) {
  return {
    type: SEARCH_INPUT,
    searchInput
  }
}
