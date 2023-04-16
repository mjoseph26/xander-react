import React from 'react'

const ConditionalRendering = () => {
  return (
    <div className="container">
        <form className="form">
            <h3>Login</h3>
            <div className="form-row">
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="text"
                className="form-input"
                id="email"  
            />
            </div>
            <div className="form-row">
            <label htmlFor="password" className="form-label">
                Password
            </label>
            <input
                type="password"
                className="form-input"
                id="password"     
            />
            </div>
            <button type="submit" className="btn btn-block">
            login
            </button>
        </form>
        <div>
            <h2>You are logged in!</h2>
            <button className="btn" type='button'>Logout</button>
        </div>
    </div>
  )
}

export default ConditionalRendering