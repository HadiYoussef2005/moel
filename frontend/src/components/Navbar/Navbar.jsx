import React from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register')
    }
    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className = "navbar-container">
            <div className="left">
                <img src="/MOEL_Logo/MOEL.svg" alt="MOEL" className="MOEL_LOGO_NAV" />
            </div>
            <div className="right">
                <ul>
                    <li>
                        <button className="nav-btn" onClick={handleLogin}>Login</button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={handleRegister}>Register</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar