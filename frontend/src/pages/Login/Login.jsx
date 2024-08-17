import React, { useState } from 'react'
import './login.css'

const Login = () => {
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("Log in button clicked!")
    }
  return (
    <>
        <div className="card">
            <div className="card-content">
                <div className="card-form">
                    <div className="card-header">
                        <h1>Login</h1>
                    </div>
                    <div className="user-input">
                        <div className="input-boxes">
                            <input 
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                             />
                             <input 
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                             />
                        </div>
                        <div className="submit-button">
                            <button onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                    <div className="no-account">
                        <p>Don't have an account? Register <button>here</button></p>
                    </div>
                    {error ? <div className="error-text">{errorText}</div> : null}
                </div>
                <div className="logo">

                </div>
            </div>
        </div>
    </>
  )
}

export default Login