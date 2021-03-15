import React, { useEffect, useState } from 'react';
import '../index';
import Movie from './Movie';

const { REACT_APP_API_KEY } = process.env;

const FEATURED_API = 'https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }


  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input className='search' type='search' placeholder='search...' value={searchTerm} onChange={handleChange} />
        </form>
      </header>
      <div className='movie-container'>
        {movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
        )}
      </div>
    </>
  )
}

export default App;
