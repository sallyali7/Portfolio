import React from 'react'

function NavBar() {
  return ( 
    <nav className="navbar">
      <a className="navbar-object" href="/">About</a>
      <a className="navbar-object" href="/portfolio">Portfolio</a>
      <a className="navbar-object" href="/email">Gmail</a>
    </nav>
  )
}

export default NavBar