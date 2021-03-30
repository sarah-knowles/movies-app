import React from 'react';

const Popup = ({ selected, closePopup }) => {
  return (
    <section className='popup'>
      <div className='content'>
        <h2>{selected.Title} <span>({ selected.release_date })</span></h2>
        <p className='rating'>Rating: {selected.vote_average}</p>
        <div className='plot'>
          <img src={selected.poster_path} alt={selected.title}/>
          <p>{selected.overview}</p>
        </div>
        <button className='close' onClick={closePopup}>Close</button>
      </div>
    </section>
  )
}

export default Popup
