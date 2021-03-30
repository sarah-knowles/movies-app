import React from 'react';


class Navbar extends React.Component {

  render() {
  return (
  
    <div className='navbar'>
      <a href="/Watched">Watched</a>
      <a href="/Watchlist">Watchlist</a>
      <a className="active" href="/">Home</a>
      <h1 className='logo'>Movie List</h1>
    </div>

    )
  }
}

export default Navbar;