import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';


//initial state
const intitialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

//context
export const GlobalContext = createContext(intitialState);

//provider
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, intitialState);
  
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist)),
    localStorage.setItem('watched', JSON.stringify(state.watched))},
    [state]) 
  };

//action
const addMovieToWatchlist = movie => {
  dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
}

  return (
    <GlobalContext.Provider value={{ watchlist: state.watchlist, watched: state.watched, addMovieToWatchlist, }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;