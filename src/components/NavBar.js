
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">NewsDonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="na-Link active text-light" aria-current="page" to="/" style={{marginRight: '10px'}}>Home</Link>
        </li>
      
        <li className="nav-item">
          <Link className="na-Link active text-light" aria-current="page" to="/business" style={{marginRight: '10px'}}>Business</Link>
        </li>
        <li className="nav-item">
          <Link className="na-Link text-light" to="/health" style={{marginRight: '10px'}}>Health</Link>
        </li>
        <li className="nav-item">
          <Link className="na-Link active text-light" aria-current="page" to="/entertainment" style={{marginRight: '10px'}}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="na-Link text-light" to="/science" style={{marginRight: '10px'}}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="na-Link active text-light" aria-current="page" to="/general" style={{marginRight: '10px'}}>General</Link>
        </li>
        <li className="nav-item">
          <Link className="na-Link text-light" to="/technology" style={{marginRight: '10px'}}>technology</Link>
        </li>
        
         
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar