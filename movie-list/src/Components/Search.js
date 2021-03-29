import React from 'react';

const Search = ({ handleInput, search }) => {
  return (
    <section className='searchbox-wrap'>
      <input onChange={handleInput}
        onKeyPress={search}      
        type='text'
        placeholder=' ... search for a movie '
        className='searchbox' />
    </section>
  )
}

export default Search;