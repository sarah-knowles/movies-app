import React from 'react';

function Result ({ result, openPopup }) {
  return (
    <div className='result' onClick={() => openPopup(result.id)}>
      <img src={result.poster_path} alt={result.title} />
      <h3>{result.title}</h3>
      <h5>{result.release_date}</h5>
    </div>
  )
}

export default Result
