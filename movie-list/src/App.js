import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Results from './Components/Results';


function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  });
  
  
  const apiurl = `https://api.themoviedb.org/3/search/movie?api_key=6ebf4757b052b132e5dfcae4da97b65f&query=`;
  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(apiurl + 'search')
        .then((res) => res.json())
        .then((data) => {
          let results = (data.Search)
          setState(prevState => {
            return { ...prevState, results: results }
          })
        });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s }
    });
  }


  return (
    <div className="App">
      <div className='movie-container'>
        <Navbar />
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </div>
    </div>
  );
}

export default App;
