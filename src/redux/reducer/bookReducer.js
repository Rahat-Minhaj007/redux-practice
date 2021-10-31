import bookData from "../../fakeData/bookData";

const initialState = {
  booksList: bookData,
  addedBook: [],
  finishedBook: []
}

const bookReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'LOAD_BOOK': {
      return {
        ...state, bookList: action.payload
      };
    }

    case 'ADD_BOOK': {
      return {
        ...state, addedBook: [...state.addedBook, action.payload]
      };
    }

    case 'REMOVE_BOOK': {
      return {
        ...state, addedBook: action.payload
      };
    }

    default: return state;

  }

}

export default bookReducer;
