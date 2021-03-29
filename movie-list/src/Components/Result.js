import React from 'react';

function Result ({ result, openPopup }) {
  return (
    <div className='result' onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt={result.Title} />
      <h3>{result.Title}</h3>
      <h5>{result.Year}</h5>
      <h5>({result.Type})</h5>
    </div>
  )
}

export default Result
