import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className = "navbar-container">
        <div className="left">
            <img src="/MOEL_Logo/MOEL.svg" alt="MOEL" className="MOEL_LOGO_NAV" />
        </div>
        <div className="right">
            <ul>
                <li>
                    <button className="nav-btn">Login</button>
                </li>
                <li>
                    <button className="nav-btn">Register</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar