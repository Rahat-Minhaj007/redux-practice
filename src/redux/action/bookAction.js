export const loadBook = (payload) => {
  return {
    type: 'LOAD_BOOK',
    payload
  }
}

export const addBook = (payload) => {
  return {
    type: 'ADD_BOOK',
    payload
  }
}

export const removeBook = (payload) => {
  return {
    type: 'REMOVE_BOOK',
    payload
  }
}