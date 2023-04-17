import React, { useState } from "react";

const TernaryOperator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="container centered">
        {isLoggedIn ? (
          <>
            <h2>You are logged in!</h2>
            <button
              className="btn"
              type="button"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <form className="form">
              <h3>Login</h3>
              <div className="form-row">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="text" className="form-input" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-input" id="password" />
              </div>
              <button
                type="submit"
                className="btn btn-block"
                onClick={() => setIsLoggedIn(true)}
              >
                login
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default TernaryOperator;
