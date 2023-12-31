import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="#">Basic App</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Page 1 <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/form">Page 2</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar