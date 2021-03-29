import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Results from './Components/Results'
import Popup from './Components/Popup';


function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  });

  const apiurl = 'http://www.omdbapi.com/?apikey=4ba564fd';
  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(apiurl + '&s=' + state.s)
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

  const openPopup = id => {
    fetch(apiurl + '&i=' + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        let result = data;

        setState(prevState => {
          return { ...prevState, selected: result }
        });
      });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }


  return (
    <div className="App">
      <div className='movie-container'>
        <Navbar />
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != 'undefined') ? 
        <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </div>
    </div>
  );
}

export default App;
