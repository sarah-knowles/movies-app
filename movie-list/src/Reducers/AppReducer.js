export default (state, action) => {
  switch(action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state]  
      }
    default:
      return state;
  }
};