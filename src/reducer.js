export const initialState = {
  movie: null,
};
export const actionType = {
  SET_SEARCH_MOVIE: "SET_SEARCH_TERM",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_SEARCH_MOVIE:
      return { ...state, movie: action.movie };
    default:
      return state;
  }
};
